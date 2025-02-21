const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { JSDOM } = require("jsdom");
const bodyParser = require("body-parser");
require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");


const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet({
  contentSecurityPolicy: false, // Désactive CSP si pas nécessaire (à configurer si besoin)
  xssFilter: true,
  frameguard: { action: "deny" },
  noSniff: true,
  hidePoweredBy: true
}));

app.use(bodyParser.json());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2000,
  message: "Trop de requêtes, réessayez plus tard."
});

app.use("/", limiter);
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));


const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  },
});
const sessions = new Map();

async function fetchRandomWord() {
  const response = await axios.get(process.env.API_RANDOM_WORD, {
    headers: { Accept: "application/json" },
  });
  return response.data.word;
}

async function calculateSimilarity(word1, word2) {
  try {
    const response = await axios.post(
      process.env.API_SIMILARITY, 
      { word1, word2 },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );

    if (response.data && response.data.similarity !== undefined) {
      return response.data
    }
    throw new Error("Aucune similarité trouvée.");
  } catch (error) {
    console.error("Erreur lors de la requête POST :", error);
    throw new Error("Erreur lors de la récupération de la similarité.");
  }
}


async function checkWordIdentical(word1, word2) {
  try {
    const similarityResult = await calculateSimilarity(word1, word2);

    const identical = Math.round(similarityResult.similarity, 2) === 1.0;
    
    return {
      word1,
      word2,
      identical,
      reason: identical ? "Les mots sont strictement identiques." : "Les mots ne sont pas strictement identiques."
    };
  } catch (error) {
    console.error("Erreur lors de la vérification de l'identité :", error);
    
  }
}

function maskWord(word) {
  return "_".repeat(word.length);
}



// Endpoint pour récupérer la définition d'un mot
app.post('/api/definition', async (req, res) => {
  const { word } = req.body;

  if (!word) {
    return res.status(400).json({ error: 'Le mot est requis.' });
  }

  try {
    const response = await axios.post(
        'https://api-definition.fgainza.fr/app/api_wiki.php',
        new URLSearchParams({ motWiki: word }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    // Retourne la réponse JSON à l'utilisateur
    res.json(response.data);
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API PHP :', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de la définition.' });
  }
});



io.on("connection", (socket) => {
  socket.on("createSession", async ({ mode, userId, pseudo }, callback) => {
    const sessionId = uuidv4();
    let randomWord = "";

    if (mode === "collaboration") {
      randomWord = await fetchRandomWord();
    } else if (mode === "affrontementrandom") {
      randomWord = await fetchRandomWordAPI();
    } else if (mode === "affrontement") {
      randomWord = "mot_inconnu";
    }

    sessions.set(sessionId, {
      players: [{ id: socket.id, pseudo, userId }],
      word: randomWord,
      totalAttempts: 0,
      mode,
    });

    socket.join(sessionId);
    io.to(sessionId).emit("updatePlayers", sessions.get(sessionId).players);
    callback({ sessionId, randomWord });
  });

  socket.on("joinSession", ({ sessionId, userId, pseudo }, callback) => {
    const session = sessions.get(sessionId);
    if (!session) {
      callback({ error: "Session introuvable." });
      return;
    }

    if (session.players.length >= 2) {
      callback({ error: "Session complète." });
      return;
    }

    session.players.push({ id: socket.id, pseudo, userId });
    socket.join(sessionId);
    io.to(sessionId).emit("updatePlayers", session.players);
    callback({ success: true, randomWord: session.word });
  });

  socket.on("submitWord", async ({ sessionId, submittedWord }, callback) => {
    const session = sessions.get(sessionId);
    if (!session) {
      callback({ error: "Session introuvable." });
      return;
    }

    const player = session.players.find((p) => p.id === socket.id);
    if (!player) {
      callback({ error: "Joueur introuvable dans la session." });
      return;
    }

    const randomWord = session.word;
    const identicalData = await checkWordIdentical(submittedWord, randomWord);
    if (!identicalData) {
      return;
    }

    const { identical } = identicalData;
    const similarityData = await calculateSimilarity(submittedWord, randomWord);
    const similarity = similarityData.similarity;

    session.totalAttempts++;

    // Mise à jour pour chaque joueur
    session.players.forEach((p) => {
      if (p.id === socket.id) {
        // Le joueur qui a soumis le mot voit son mot
        io.to(p.id).emit("updateGame", {
          pseudo: player.pseudo,
          word: submittedWord,
          similarity,
          identical,
          totalAttempts: session.totalAttempts,
        });
      } else {
        // L'autre joueur voit un mot masqué seulement en mode affrontementrandom
        io.to(p.id).emit("updateGame", {
          pseudo: player.pseudo,
          word: session.mode === "affrontementrandom" ? maskWord(submittedWord) : submittedWord,
          similarity,
          identical,
          totalAttempts: session.totalAttempts,
        });
      }
    });

    if (identical) {
      io.to(sessionId).emit("gameEnd", {
        win: `${player.pseudo} a trouvé le mot mystère ! ${session.mode === "affrontementrandom" ? " Il remporte la partie !" : ""}`,
        totalAttempts: session.totalAttempts,
        mode: session.mode,
      });
      sessions.delete(sessionId);
    }
  });

  socket.on("disconnect", () => {
    for (const [sessionId, session] of sessions.entries()) {
      const playerIndex = session.players.findIndex((p) => p.id === socket.id);
      if (playerIndex !== -1) {
        session.players.splice(playerIndex, 1);
        if (session.players.length === 0) {
          sessions.delete(sessionId);
        } else {
          io.to(sessionId).emit("updatePlayers", session.players);
        }
      }
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const { JSDOM } = require("jsdom");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  },
});

const sessions = new Map();

async function fetchRandomWord() {
  const response = await axios.get("https://approximot-1967d63b9545.herokuapp.com/current-word", {
    headers: { Accept: "application/json" },
  });
  return response.data.word;
}

async function calculateSimilarity(word1, word2) {
  try {
    const response = await axios.post(
      "https://approximot-1967d63b9545.herokuapp.com/similarity", 
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
  const response = await axios.get("http://127.0.0.1:8000/api/word_identical", {
    params: { word1, word2 },
    headers: { Accept: "application/json" },
  });
  return response.data;
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
      callback({ error: "Erreur lors de la vérification des mots identiques." });
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
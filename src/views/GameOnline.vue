<template>
  <div class="gray-box">
    <h1 class="pseudoGame">Jeu de Similarité</h1>

    <div v-if="!sessionId" class="MotBox">
      <input
          type="radio"
          value="collaboration"
          v-model="gameMode"
          hidden
      />
      <button class="invite-button" @click="createSession">Créer une session</button>
      <br>
      <input
          v-model="sessionToJoin"
          placeholder="Entrez un ID de session"
          class="MotBox"
      />
      <button
          class="sort-button"
          @click="joinSession"
          :disabled="!sessionToJoin.trim()"
      >
        Rejoindre
      </button>
      <br>
      <button class="invite-button" @click="joinPhoneGame">
        Rejoindre un joueur sur téléphone
      </button>
    </div>

    <div v-else>
      <p class="MotBox">
        ID de session : <strong>{{ sessionId }}</strong>
      </p>
      <p class="MotBox">Joueurs connectés : {{ connectedPlayers.length }}</p>
      <p class="MotBox">Mot aléatoire : {{ randomWord }}</p>
      <p class="MotBox">
        Nombre total de coups : {{ totalAttempts + similarityResults.length }}
      </p>
      <input
          v-model="submittedWord"
          placeholder="Entrez un mot"
          :disabled="gameEnded || connectedPlayers.length < 2"
          class="MotBox"
      />
      <button
          class="sort-button"
          @click="submitWord"
          :disabled="gameEnded || connectedPlayers.length < 2"
      >
        Soumettre
      </button>
      <button
          v-if="isPhoneGame"
          class="invite-button"
          @click="quitGame"
      >
        Quitter la session
      </button>

      <ul class="resultatMot-container">
        <li v-for="(result, i) in similarityResults" :key="i">
          <p
              v-if="result.error !== true"
              class="resultatMot"
          >
            {{ result.word1 }} - {{ result.word2 }} : {{ (result.similarity * 100).toFixed(2) }}°
          </p>
          <p
              v-else
              class="resultatMot errorResult"
          >
            Le mot "{{ result.word1 }}" n'est pas dans le vocabulaire
          </p>
        </li>
        <li v-for="(player, index) in sortedPlayers" :key="index">
          <span
              v-if="player.similarity !== undefined"
              class="resultatMot"
          >
            {{ player.pseudo }} a soumis "{{ player.word }}" : {{ (player.similarity * 100).toFixed(2) }}°
          </span>
          <span
              v-else
              class="resultatMot errorResult"
              style="color:red"
          >
            Le mot "{{ player.word }}" n'est pas dans le vocabulaire
          </span>
        </li>
      </ul>

      <p v-if="gameEnded" class="pseudoGame">
        {{ win }} Le mot à deviner était "{{ randomWord }}" !
      </p>
      <div v-if="gameEnded">
        <router-link to="/home">
          <button class="invite-button">Retour à l'accueil</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { io } from "socket.io-client";
import { doc, getDoc, setDoc, deleteDoc, FieldValue, runTransaction, onSnapshot } from "firebase/firestore";

import { firebaseApp, auth, database, ref as firebaseRef, get, set as setFirebaseWeb } from "@/firebase";
import { authMobile, firestoreMobile } from "@/firebaseMobile";

const route = useRoute();

// Définir une variable pour stocker les résultats parsés
const similarityResults = ref([]);

// Parse des données brutes depuis la query string
onMounted(() => {
  const resultsQuery = route.query.results;
  if (resultsQuery) {
    try {
      similarityResults.value = JSON.parse(resultsQuery);
      console.log('Données reçues et parsées:', similarityResults.value);
    } catch (error) {
      console.error('Erreur lors du parsing des résultats:', error);
    }
  } else {
    console.log('Aucune donnée reçue.');
  }
});
const socket = io("http://localhost:3000");

// Références pour l'état du jeu
const sessionId = ref("");
const sessionToJoin = ref("");
const randomWord = ref("");
const submittedWord = ref("");
const gameEnded = ref(false);
const win = ref("");
const players = ref([]);
const connectedPlayers = ref([]);
const totalAttempts = ref(0);
const gameMode = ref("collaboration");

const userPseudo = ref("");
const userId = ref("");

const isPhoneGame = ref(false);

let gameSessionSubscription = null;
const gameSession = ref(null);

const congratulatoryMessageShown = ref(false);
const wordFoundMessageShown = ref(false);

// Récupération du pseudo utilisateur depuis Firebase
const fetchPseudo = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = firebaseRef(database, `users/${user.uid}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        userPseudo.value = snapshot.val().pseudo;
        userId.value = user.uid;
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du pseudo :", error);
    }
  }
};

const fetchPseudoMobile = async () => {
  const user = auth.currentUser;
  if (user) {
    userPseudo.value = user.uid.substring(0, 4);
    userId.value = user.uid;
  }
};

onMounted(() => {
  if (isPhoneGame.value) {
    fetchPseudoMobile();
  } else {
    fetchPseudo();
  }
});

const registerUser = async () => {
  if (!userId.value) {
    userId.value = auth.currentUser.uid;
    return;
  }

  const userDocRef = doc(firestoreMobile, "users", userId.value); 

  const userSnapshot = await getDoc(userDocRef);
  
  const userData = {
    activeGame: null,
    lastSeen: new Date().toISOString(),
    displayName: userPseudo.value || auth.currentUser.displayName || "User",
    email: auth.currentUser?.email || "unknown@example.com",
    photoURL: auth.currentUser?.photoURL || "null",
    singlePlayerGuesses: []
  };

  if (!userSnapshot.exists()) {
    userData.createdAt = new Date().toISOString();
  }

  try {
    await setDoc(userDocRef, userData, { merge: true });
  } catch (error) {
    console.error("Error registering or updating user:", error);
  }
};

const getSimilarity = async (word1, word2) => {
  try {
    const response = await fetch(`https://approximot-1967d63b9545.herokuapp.com/similarity`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word1, word2 }),
    });

    if (response.status === 404) {
      throw new Error(`Word not found: ${word1}`);
    }

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data.similarity;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting similarity:', error);
    return null;
  }
};

const addGuess = async (code, playerId, guess) => {
  const sessionDocRef = doc(firestoreMobile, "game_sessions", code);

  const sessionDoc = await getDoc(sessionDocRef);
  
  if (!sessionDoc.exists()) throw new Error("Session does not exist");

  const sessionData = sessionDoc.data();
  const playerGuesses = sessionData.playerGuesses || {};

  if (!playerGuesses[playerId]) {
    playerGuesses[playerId] = [];
  }

  const existingGuesses = playerGuesses[playerId];

  if (existingGuesses.some(g => g.word === guess.word)) {
    return;
  }

  const similarityAsDouble = parseFloat(guess.similarity);

  existingGuesses.push({
    ...guess,
    similarity: similarityAsDouble
  });

  await setDoc(sessionDocRef, {
    playerGuesses: playerGuesses,
    lastUpdate: Date.now(),
  }, { merge: true });
};

const joinPhoneGame = async () => {
  const { authMobile, firestoreMobile } = await import('@/firebaseMobile');

  const gameCode = prompt("Entrez le code du jeu pour rejoindre:");
  
  if (gameCode) {
    await registerUser();

    const user = auth.currentUser;
    if (!user) {
      console.error("User is not signed in.");
      alert("You must be signed in to join a game.");
      return;
    }

    if (!userId.value) {
      userId.value = user.uid;
    }

    const gameSessionRef = doc(firestoreMobile, "game_sessions", gameCode);
    try {
      const gameSessionSnapshot = await getDoc(gameSessionRef);
      if (gameSessionSnapshot.exists()) {
        const gameData = gameSessionSnapshot.data();
        
        if (gameData.isActive) {
          const playerIds = gameData.playerIds || [];
          
          if (playerIds.includes(userId.value)) {
            sessionId.value = gameCode;
            connectedPlayers.value = playerIds;

            const currentWordRef = doc(firestoreMobile, "game", "currentWord");
            const currentWordSnapshot = await getDoc(currentWordRef);
            if (currentWordSnapshot.exists()) {
              randomWord.value = currentWordSnapshot.data().word;
            } else {
              console.error("Current word document does not exist!");
            }
            isPhoneGame.value = true;
            subscribeToGameSession();
            alert("Vous êtes déjà dans cette session !");
            return; 
          }
          
          playerIds.push(userId.value);
          await setDoc(gameSessionRef, { playerIds }, { merge: true });
          await setDoc(gameSessionRef, { currentUserId: userId.value }, { merge: true });

          sessionId.value = gameCode;
        
          const updatedGameSessionSnapshot = await getDoc(gameSessionRef);
          if (updatedGameSessionSnapshot.exists()) {
            const updatedGameData = updatedGameSessionSnapshot.data();
            connectedPlayers.value = updatedGameData.playerIds || [];
          }

          const currentWordRef = doc(firestoreMobile, "game", "currentWord");
          const currentWordSnapshot = await getDoc(currentWordRef);
          if (currentWordSnapshot.exists()) {
            randomWord.value = currentWordSnapshot.data().word;
          } else {
            console.error("Current word document does not exist!");
          }

          isPhoneGame.value = true;

          alert("Session rejointe avec succès !");
          subscribeToGameSession();
        } else {
          quitGame();
          alert("Cette session n'est plus active !");
        }
      } else {
        alert("Session non trouvée !");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la session :", error);
    }
  }
};

// Création d'une session
const createSession = () => {
  socket.emit(
    "createSession",
    { mode: gameMode.value, userId: userId.value, pseudo: userPseudo.value },
    (response) => {
      if (!response.error) {
        sessionId.value = response.sessionId;
        randomWord.value = response.randomWord;
        alert(`Session créée avec succès : ${response.sessionId}`);
      } else {
        alert(`Erreur : ${response.error}`);
      }
    }
  );
};

// Rejoindre une session existante
const joinSession = () => {
  if (sessionToJoin.value.trim()) {
    socket.emit(
      "joinSession",
      { sessionId: sessionToJoin.value.trim(), userId: userId.value, pseudo: userPseudo.value },
      (response) => {
        if (!response.error) {
          sessionId.value = sessionToJoin.value.trim();
          randomWord.value = response.randomWord;
          alert("Session rejointe avec succès !");
          if(isPhoneGame.value){
            subscribeToGameSession();
            subscribeToCurrentWord();
          }
          
          
        
        } else {
          alert(`Erreur : ${response.error}`);
        }
      }
    );
  }
};

// Soumission d'un mot
const submitWord = async () => {
  const trimmedWord = submittedWord.value.trim();
  if (trimmedWord) {
    if (isPhoneGame.value) {
      await handleGuess(trimmedWord);
    } else {
      socket.emit("submitWord", {
        sessionId: sessionId.value,
        userId: userId.value,
        pseudo: userPseudo.value,
        submittedWord: trimmedWord,
      });
    }
    submittedWord.value = "";
  } else {
    alert("Veuillez entrer un mot valide.");
  }
};

// Trier les joueurs par similarité
const sortedPlayers = computed(() =>
  [...players.value].sort((a, b) => b.similarity - a.similarity)
);

// Gestion des événements socket
onMounted(() => {
  socket.on("updatePlayers", (updatedPlayers) => {
    connectedPlayers.value = updatedPlayers;
  });

  socket.on("updateGame", (data) => {
    players.value.push({
      pseudo: data.pseudo,
      word: data.word,
      similarity: data.similarity,
    });
    totalAttempts.value = data.totalAttempts;
  });

  socket.on("gameEnd", (data) => {
    gameEnded.value = true;
    win.value = `${data.win} (${data.totalAttempts} ${data.totalAttempts > 1 ? "coups" : "coup"} au total !)`;
    saveGameResult();
  });

  socket.on("resetGame", () => {
    totalAttempts.value = 0;
    players.value = [];
    gameEnded.value = false;
    win.value = "";
    submittedWord.value = "";
  });
});

// Fonction pour sauvegarder le résultat du jeu dans Firebase
const saveGameResult = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("Utilisateur non authentifié.");
    return;
  }

  const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  const timestamp = new Date().toISOString().replace(/[.:"T]/g, "_");

  const userWordsRef = firebaseRef(database, `users/${user.uid}/words/${timestamp}`);

  const dataToSave = {
    date: currentDate, // Date au format YYYY-MM-DD
    word: randomWord.value,
    attempts:totalAttempts.value,
  };

  try {
    await setFirebaseWeb(userWordsRef, dataToSave);
    console.log("Résultat sauvegardé avec succès pour l'utilisateur :", user.uid);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
  }
};

// Déconnexion du socket à la fin
onBeforeUnmount(() => {
  socket.disconnect();
});

const quitGame = async () => {
  congratulatoryMessageShown.value = false;
  const gameSessionRef = doc(firestoreMobile, "game_sessions", sessionId.value);

  try {
    const gameSessionSnapshot = await getDoc(gameSessionRef);
    if (gameSessionSnapshot.exists()) {
      const gameData = gameSessionSnapshot.data();
      const playerIds = gameData.playerIds || [];

      const updatedPlayerIds = playerIds.filter(id => id !== userId.value);

      if (updatedPlayerIds.length === 0) {
        await deleteDoc(gameSessionRef);
      } else {
        await setDoc(gameSessionRef, { playerIds: updatedPlayerIds }, { merge: true });
      }

      sessionId.value = "";
      randomWord.value = ""; 
      submittedWord.value = "";
      players.value = [];
      isPhoneGame.value = false;
      connectedPlayers.value = [];
      gameEnded.value = false; 
      win.value = "";

      alert("Vous avez quitté la session avec succès !");
    }
    if (gameSessionSubscription) {
      gameSessionSubscription();
      gameSessionSubscription = null;
    }
  } catch (error) {
    sessionId.value = "";
    randomWord.value = ""; 
    submittedWord.value = "";
    players.value = [];
    isPhoneGame.value = false;
    connectedPlayers.value = [];
    gameEnded.value = false; 
    win.value = "";
    alert("Une erreur s'est produite lors de la tentative de quitter la session. Retour à l'écran d'accueil.");
  }
};

const getEmbedding = async (text) => {
  if (text.trim() === "") {
    return null;
  }

  try {
    const response = await fetch(`https://approximot-1967d63b9545.herokuapp.com/embed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return data.embedding;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting embedding:', error);
    return null;
  }
};

const handleGuess = async (guessWord) => {
  const cleanedGuess = guessWord.trim().toLowerCase();

  if (cleanedGuess === "") {
    alert("Le mot est vide ou invalide.");
    return;
  }

  const existingGuess = players.value.find(player => player.word === cleanedGuess);
  if (existingGuess) {
    return;
  }

  const similarity = await getSimilarity(cleanedGuess, randomWord.value);
  
  if (similarity !== null) {
    const guessResult = {
      word: cleanedGuess,
      similarity: similarity,
      isCorrect: cleanedGuess === randomWord.value,
    };

    await addGuess(sessionId.value, userId.value, guessResult);

    const playerGuess = {
      pseudo: auth.currentUser.uid.substring(0, 4),
      word: cleanedGuess,
      similarity: similarity,
    };

    players.value.push(playerGuess);

    if (guessResult.isCorrect) {
      if (!congratulatoryMessageShown.value) {
        if (isPhoneGame.value) {
          await fetch(`https://approximot-1967d63b9545.herokuapp.com/increment-found-count`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });

          const gameSessionRef = doc(firestoreMobile, "game_sessions", sessionId.value);
          const sessionDoc = await getDoc(gameSessionRef);
          if (sessionDoc.exists()) {
            const sessionData = sessionDoc.data();
            const winners = sessionData.winners || [];
            if (!winners.includes(userId.value)) {
              winners.push(userId.value);
            }
            await setDoc(gameSessionRef, {
              winners,
              wordFound: true
            }, { merge: true });
          }
        }
        alert(`Félicitations ! Vous avez trouvé le mot : ${randomWord.value}`);
        congratulatoryMessageShown.value = true;
      }
    }
  } else {
    alert("Ce mot n'est pas dans le dictionnaire.");
  }
};

const subscribeToGameUpdates = () => {
  socket.on("updateGame", (data) => {
    if (data.guess) {
      const playerGuess = {
        pseudo: data.pseudo,
        word: data.guess.word,
        similarity: data.guess.similarity,
        uid: data.userId
      };

      const existingGuess = players.value.find(player => player.word === playerGuess.word);
      if (!existingGuess) {
        players.value.push(playerGuess);
      }
    }
  });
};

onMounted(() => {
  subscribeToGameUpdates();
});

const subscribeToGameSession = () => {
  if (!sessionId.value) {
    return;
  }

  const sessionDocRef = doc(firestoreMobile, "game_sessions", sessionId.value);
  
  gameSessionSubscription = onSnapshot(sessionDocRef, (doc) => {
    if (doc.exists()) {
      const session = doc.data();
      gameSession.value = session;

      const currentWords = new Set(players.value.map((g) => g.word));
      for (const playerId in session.playerGuesses) {
        const playerGuesses = session.playerGuesses[playerId];
        for (const guess of playerGuesses) {
          if (playerId === userId.value) {
            continue;
          }
          if (!guess.isCorrect && !currentWords.has(guess.word)) {
            players.value.push({
              ...guess,
              pseudo: playerId.substring(0, 4)
            });
            currentWords.add(guess.word);
          }
        }
      }

      if (session.wordFound && session.winners.length > 0 && !wordFoundMessageShown.value && !session.winners.includes(userId.value)) {
        showDialogForWinning();
        wordFoundMessageShown.value = true;
      }
    } else {
      console.error("Session does not exist.");
    }
  });
};

const showDialogForWinning = () => {
  alert("Un joueur a trouvé le mot secret !");
};

onMounted(() => {
  if(isPhoneGame.value){
    subscribeToGameSession();
    subscribeToCurrentWord();
  }
  
});

const subscribeToCurrentWord = () => {
  const currentWordDocRef = doc(firestoreMobile, "game", "currentWord");
  
  let lastWord = null;

  onSnapshot(currentWordDocRef, (doc) => {
    if (doc.exists()) {
      const newWord = doc.data().word;

      if (newWord !== lastWord) {
        randomWord.value = newWord;
        players.value = [];
        lastWord = newWord;
        congratulatoryMessageShown.value = false;
      }
    } else {
      console.error("Current word document does not exist.");
    }
  });
};
</script>

<style scoped>

@import '@/assets/css/GameOnline.css';

</style>

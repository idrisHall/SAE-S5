<template>
    <div>
      <h1>Jeu de Similarité</h1>
      <div v-if="!sessionId">
        <div>
            <input
              type="radio"
              value="affrontement"
              v-model="gameMode"
              hidden
            />
        </div>
        <input
          v-model="wordAffrontement"
          placeholder="Entrez un mot à faire deviner"
        />
        <button @click="createSession" :disabled="!wordAffrontement.trim()">Créer une session</button>
        <br />
        <input v-model="sessionToJoin" placeholder="Entrez un ID de session" />
        <button @click="joinSession" :disabled="!sessionToJoin.trim()">Rejoindre</button>
      </div>
      <div v-else>
        <p>ID de session : <strong>{{ sessionId }}</strong></p>
        <p>Mode de jeu : <strong>{{ gameMode === 'affrontement' ? 'Affrontement' : 'Collaboration' }}</strong></p>
        <p>Joueurs connectés : {{ connectedPlayers.length }}</p>
        <p v-if="gameMode === 'collaboration'">Mot aléatoire : {{ randomWord }}</p>
        <p>Nombre total de coups : {{ totalAttempts }}</p>
        <input
          v-model="submittedWord"
          placeholder="Entrez un mot"
          :disabled="gameEnded || connectedPlayers.length < 2"
        />
        <button
          @click="submitWord"
          :disabled="gameEnded || connectedPlayers.length < 2"
        >
          Soumettre
        </button>
        <ul>
          <li v-for="(player, index) in sortedPlayers" :key="index">
            {{ player.pseudo }} a soumis "{{ player.word }}" : {{ player.similarity }}
          </li>
        </ul>
        <p v-if="gameEnded">{{ win }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from "vue";
  import { io } from "socket.io-client";
  
  const socket = io("http://localhost:3000");
  
  const sessionId = ref("");
  const sessionToJoin = ref("");
  const randomWord = ref("");
  const submittedWord = ref("");
  const wordAffrontement = ref("");
  const gameEnded = ref(false);
  const win = ref("");
  const players = ref([]);
  const connectedPlayers = ref([]);
  const totalAttempts = ref(0);
  const gameMode = ref("affrontement");
  
  const createSession = () => {
    socket.emit(
      "createSession",
      gameMode.value,
      wordAffrontement.value,
      (response) => {
        if (!response.error) {
          sessionId.value = response.sessionId;
          randomWord.value = response.randomWord;
          alert(`Session créée avec succès : ${response.sessionId}`);
        }
      }
    );
  };
  
  const joinSession = () => {
    if (sessionToJoin.value.trim()) {
      socket.emit("joinSession", sessionToJoin.value.trim(), (response) => {
        if (!response.error) {
          sessionId.value = sessionToJoin.value.trim();
          randomWord.value = response.randomWord;
          alert("Session rejointe avec succès !");
        }
      });
    }
  };
  
  const submitWord = () => {
    if (submittedWord.value.trim() && sessionId.value) {
      socket.emit("submitWord", {
        sessionId: sessionId.value,
        submittedWord: submittedWord.value.trim(),
      });
      submittedWord.value = "";
    }
  };
  
  const sortedPlayers = computed(() =>
    [...players.value].sort((a, b) => b.similarity - a.similarity)
  );
  
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
      win.value = `${data.win} (${data.totalAttempts} ${
        data.totalAttempts > 1 ? "coups" : "coup"
      } au total !)`;
    });
    socket.on("resetGame", () => {
      totalAttempts.value = 0;
      players.value = [];
      gameEnded.value = false;
      win.value = "";
      submittedWord.value = "";
    });
  });
  
  onBeforeUnmount(() => {
    socket.disconnect();
  });
  </script>
  
  <style>
  h1 {
    font-family: Arial, sans-serif;
    font-size: 1.8em;
    margin-bottom: 1em;
  }
  button {
    margin: 0.5em;
    padding: 0.5em 1em;
    font-size: 1em;
  }
  
  input {
    margin: 0.5em 0.2em;
    padding: 0.5em;
    font-size: 1em;
    width: 200px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  </style>
  
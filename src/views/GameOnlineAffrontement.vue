<template>
  <div class="gray-box">
    <h1 class="pseudoGame">Lexitom</h1>

    <div v-if="!sessionId" class="MotBox">
      <input
          type="radio"
          value="affrontementrandom"
          v-model="gameMode"
          hidden
      />
      <button class="invite-button" @click="createSession">
        Créer une session
      </button>
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
    </div>

    <div v-else>
      <p class="MotBox">
        ID de session : <strong>{{ sessionId }}</strong>
      </p>
      <p class="MotBox">Joueurs connectés : {{ connectedPlayers.length }}</p>
      <p class="MotBox" style="display: none">Mot aléatoire : {{ randomWord }}</p>
      <p class="MotBox">Nombre total de coups : {{ totalAttempts }}</p>
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
      <ul class="resultatMot-container">
        <li v-for="(player, index) in sortedPlayers" :key="index">
          <span
              v-if="player.similarity !== undefined"
              class="resultatMot"
          >
            {{ player.pseudo }} a soumis "{{ player.word }}" : {{ (player.similarity * 100).toFixed(3) }}°
          </span>
          <span
              v-else
              class="resultatMot errorResult"
              style="color: red"
          >
            Le mot "{{ player.word }}" n'est pas dans le vocabulaire
          </span>
        </li>
      </ul>
      <p v-if="gameEnded" class="pseudoGame">
        {{ win }} Le mot à deviner était "{{ randomWord }}" !
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { io } from "socket.io-client";
import { auth, database, ref as firebaseRef, get } from "@/firebase";


const socket = io("http://localhost:3000");

const sessionId = ref("");
const sessionToJoin = ref("");

const randomWord = ref("");
const submittedWord = ref("");

const gameEnded = ref(false);
const win = ref("");
const players = ref([]);
const connectedPlayers = ref([]);
const totalAttempts = ref(0);

const gameMode = ref("affrontementrandom");

const userPseudo = ref("");
const userId = ref("");

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
      console.error("Erreur lors de la récupération du pseudo Firebase:", error);
    }
  }
};

onMounted(() => {
  fetchPseudo();
});

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
        } else {
          alert(`Erreur : ${response.error}`);
        }
      }
    );
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

const sortedPlayers = computed(() => [...players.value].sort((a, b) => b.similarity - a.similarity));

onMounted(() => {
  socket.on("updatePlayers", (updatedPlayers) => {
    connectedPlayers.value = updatedPlayers;
  });

  socket.on("updateGame", (data) => {
    players.value.push({ pseudo: data.pseudo, word: data.word, similarity: data.similarity });
    totalAttempts.value = data.totalAttempts;
  });

  socket.on("gameEnd", (data) => {
    gameEnded.value = true;
    win.value = `${data.win} (${data.totalAttempts} ${data.totalAttempts > 1 ? "coups" : "coup"} au total !). Il remporte la partie !`;
  });

  socket.on("resetGame", () => {
    totalAttempts.value = 0;
    players.value = [];
    gameEnded.value = false;
    win.value = "";
    submittedWord.value = "";
  });
});

// Déconnexion du socket lorsque le composant est démonté
onBeforeUnmount(() => {
  socket.disconnect();
});
</script>

<style scoped>
@import '@/assets/css/GameOnlineAffrontement.css';

</style>

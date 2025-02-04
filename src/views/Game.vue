<template>
  <div class="gray-box">
    <p v-if="isConnected && pseudo" class="pseudoGame">Bonjour {{ pseudo }}</p>
    <p v-else-if="isConnected">Bonjour {{ email }}</p>
    <p v-else>Bonjour, vous jouez en mode invité</p>

    <!-- Conteneur pour MotBox -->
    <div class="MotBox">
      <RandomWord @wordGenerated="setRandomWord" style="display: none"/>
      <SimilarityChecker
          :randomWord="randomWord"
          @resultsUpdated="updateSimilarityResults"
      />
      <br />

    </div>

    <button class="sort-button">
      Trier : Ordre
    </button>

    <!-- Conteneur pour les résultats -->
    <div class="resultatMot-container">
      <ul>
        <li v-for="(result, index) in [...similarityResults].reverse()" :key="index">
          <span
              class="resultatMot"
              @click="showDefinition(result.word1)"
              :class="{ errorResult: result.error, normalResult: !result.error }"
          >
            {{ result.message }}
          </span>
        </li>
      </ul>
    </div>

    <button
        v-if="isConnected"
        @click="playWithFriend"
        class="invite-button"
    >
      Jouer avec un ami
    </button>
    <br />
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {authMobile} from "@/firebaseMobile"
import {database, ref as firebaseRef, get } from "@/firebase";
import RandomWord from "@/components/RandomWordPourMinuit.vue";
import SimilarityChecker from "@/components/SimilarityChecker.vue";

const randomWord = ref("");
const pseudo = ref("");
const email = ref("");
const isConnected = ref(false);
const similarityResults = ref([]); // Stocker les résultats ici

const router = useRouter();

const setRandomWord = (word) => {
  randomWord.value = word;
};

const fetchPseudoAndEmail = async () => {
  const user = authMobile.currentUser;
  if (user) {
    isConnected.value = true;
    email.value = user.email;
    const userRef = firebaseRef(database, `users/${user.uid}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        pseudo.value = snapshot.val().pseudo || "";
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des informations utilisateur :", error);
    }
  }
};

const updateSimilarityResults = (results) => {
  similarityResults.value = results;
  console.log("Tableau des résultats de similarité :", similarityResults.value);
};

const playWithFriend = () => {
  console.log("Redirection avec les résultats :", similarityResults.value);
  router.push({
    path: "/collaboration",
    query: { results: JSON.stringify(similarityResults.value) },
  });
};

onMounted(() => {
  fetchPseudoAndEmail();
});
</script>

<style scoped>
@import '@/assets/css/Game.css';
</style>

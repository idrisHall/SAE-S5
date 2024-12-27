<template>
  <div>
    <p v-if="isConnected && pseudo">Bonjour {{ pseudo }}</p>
    <p v-else-if="isConnected">Bonjour {{ email }}</p>
    <p v-else>Bonjour, vous jouez en mode invité</p>
    <RandomWord @wordGenerated="setRandomWord" />
    <SimilarityChecker 
      :randomWord="randomWord" 
      @resultsUpdated="updateSimilarityResults" 
    />
    <button 
      v-if="isConnected" 
      @click="playWithFriend" 
      class="invite-button"
    >
      Jouer avec un ami
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth, database, ref as firebaseRef, get } from "@/firebase";
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
  const user = auth.currentUser;
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
.invite-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.invite-button:hover {
  background-color: #45a049;
}
</style>

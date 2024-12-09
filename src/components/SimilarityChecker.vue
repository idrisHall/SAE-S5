<template>
  <div>
    <input v-model="submittedWord" placeholder="Entrez un mot" :disabled="endGame" />
    <button @click="checkSimilarity" :disabled="endGame">Vérifier la proximité</button>
    <p>Nombre de tentatives : {{ attemptsCount }}</p>
    <ul>
      <li v-for="(result, index) in sortedSimilarityResults" :key="index">
        {{ result.word1 }} - {{ result.word2 }} : {{ result.similarity.toFixed(4) }}
      </li>
    </ul>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="endGame" class="success">Vous avez gagné !</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { checkWordSimilarity } from "@/services/api";
import { auth, database, ref as firebaseRef, set } from "@/firebase";

const props = defineProps({
  randomWord: {
    type: String,
    required: true,
  },
});

const submittedWord = ref("");
const similarityResults = ref([]);
const attemptedWords = ref(new Set());
const attemptsCount = ref(0);
const errorMessage = ref("");
const endGame = ref(false);

const sortedSimilarityResults = computed(() => {
  return [...similarityResults.value].sort((a, b) => b.similarity - a.similarity);
});

const checkSimilarity = async () => {
  const word = submittedWord.value.trim().toLowerCase();

  if (!word) {
    errorMessage.value = "Veuillez entrer un mot.";
    return;
  }

  if (!attemptedWords.value.has(word)) {
    attemptedWords.value.add(word);
    attemptsCount.value++;
  }

  try {
    const result = await checkWordSimilarity(word, props.randomWord.toLowerCase());
    similarityResults.value.push(result);
    errorMessage.value = "";
    submittedWord.value = "";

    if (isEndGame(result)) {
      endGame.value = true;
      saveGameResult();
    }
  } catch {
    errorMessage.value = "Erreur de communication avec le serveur.";
  }
};

const isEndGame = (result) => {
  return result.similarity === 1;
};

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
    word: props.randomWord,
    attempts: attemptsCount.value,
  };

  try {
    await set(userWordsRef, dataToSave);
    console.log("Résultat sauvegardé avec succès pour l'utilisateur :", user.uid);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
  }
};
</script>

<style>
.error {
  color: red;
}
.success {
  color: green;
  font-weight: bold;
}
</style>

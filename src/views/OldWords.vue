<template>
  <div>
    <h1>Liste des anciens mots</h1>
    <ul>
      <li v-for="(word, index) in oldWords" :key="index">
        {{ word.word }} - {{ formatDate(word.timestamp) }}
      </li>
    </ul>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref as firebaseRef, get, database } from "../firebase.js";
import { ref, onMounted } from "vue";

const oldWords = ref([]);
const errorMessage = ref("");

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("fr-FR") + " " + date.toLocaleTimeString("fr-FR");
};

const fetchOldWords = async () => {
  const oldWordsRef = firebaseRef(database, "old-words");
  try {
    const snapshot = await get(oldWordsRef);
    if (snapshot.exists()) {
      oldWords.value = Object.values(snapshot.val());
    }
  } catch {
    errorMessage.value = "Erreur lors de la récupération des anciens mots.";
  }
};

onMounted(() => {
  fetchOldWords();
});
</script>

<style>
.error {
  color: red;
}
</style>

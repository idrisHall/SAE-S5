<template>
    <div>
      <p>Mot aléatoire : {{ randomWord }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { database, ref as firebaseRef, set, get } from "../firebase.js";
  import { fetchRandomWordAPI } from "@/services/api";
  
  const randomWord = ref("");
  const errorMessage = ref("");
  
  const loadRandomWord = async () => {
    const dbRef = firebaseRef(database, "word/randomWord");
  
    try {
      const snapshot = await get(dbRef);
      const currentDate = new Date().toISOString().split("T")[0]; // Date au format YYYY-MM-DD
  
      if (snapshot.exists()) {
        const data = snapshot.val();
        const storedWord = data.word;
        const storedDate = data.date; // Date associée au mot
  
        // Si le mot est encore valide pour aujourd'hui, l'utiliser
        if (storedDate === currentDate) {
          randomWord.value = storedWord;
          emit("wordGenerated", storedWord);
          return;
        }
      }
  
      // Si aucun mot valide pour aujourd'hui n'existe, en générer un nouveau
      const newWord = await fetchRandomWordAPI();
      await set(dbRef, { word: newWord, date: currentDate });
      randomWord.value = newWord;
      emit("wordGenerated", newWord);
  
      const wordKey = `${new Date().getTime()}`;
      await set(firebaseRef(database, `old-words/${wordKey}`), {
        word: newWord,
        timestamp: new Date().getTime(),
      });
    } catch {
      errorMessage.value = "Erreur lors du chargement du mot aléatoire.";
    }
  };
  
  const emit = defineEmits(["wordGenerated"]);
  
  onMounted(() => {
    loadRandomWord();
  });
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
  
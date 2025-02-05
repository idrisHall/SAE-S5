<template>
  <div>
    <div class="input-button-group">
      <input v-model="submittedWord" placeholder="Entrez un mot" :disabled="endGame"/>
      <button class="verif-button" @click="checkSimilarity" :disabled="endGame">Vérifier la proximité</button>
    </div>
    <p style="margin-top: -18.5%; margin-left: 63%">Nombre de tentatives : {{ attemptsCount }}</p>


    <p v-if="endGame" class="success">Vous avez gagné !</p>
  </div>

  <div class="right-section">

  </div>

</template>

<script setup>
import { ref } from "vue";
import { checkWordSimilarity, checkWordIdentical } from "@/services/api";
import { auth, database, ref as firebaseRef, set, get } from "@/firebase";
import axios from "axios";

const props = defineProps({
  randomWord: {
    type: String,
    required: true,
  },
});

const emitted = defineEmits(["resultsUpdated", "endGameUpdated"]); // Ajout de "endGameUpdated"

const submittedWord = ref("");
const similarityResults = ref([]);
const attemptedWords = ref(new Set());
const attemptsCount = ref(0);
const endGame = ref(false);

const checkSimilarity = async () => {
  const word = submittedWord.value.trim().toLowerCase();

  if (!word) return;

  // Empêcher les doublons dans similarityResults
  if (similarityResults.value.some((result) => result.word1 === word)) {
    submittedWord.value = ""; // Réinitialiser le champ d'entrée
    return;
  }

  if (!attemptedWords.value.has(word)) {
    attemptedWords.value.add(word);
    attemptsCount.value++;
  }

  try {
    // Vérifier si le mot est identique au mot aléatoire
    const identicalResult = await checkWordIdentical(word, props.randomWord.toLowerCase());

    if (identicalResult.identical) {
      endGame.value = true; // La partie se termine si les mots sont identiques
      emitted("endGameUpdated", true);
      similarityResults.value.push({
        word1: word,
        word2: props.randomWord,
        similarity: 1,
        message: `Vous avez trouvé le mot ${props.randomWord} du jour en ${attemptsCount.value} coups ! Cliquez sur les mots pour voir leur définition. `,
        error: false,
      });
      saveGameResult();
    } else {
      const similarityResult = await checkWordSimilarity(word, props.randomWord.toLowerCase());
      similarityResults.value.push({
        word1: word,
        word2: props.randomWord,
        similarity: similarityResult.similarity,
        message: `${word} : ${(similarityResult.similarity * 100).toFixed(3)}°`,
        error: false,
      });
    }
  } catch (err) {
    similarityResults.value.push({
      word1: word,
      word2: null,
      similarity: 0,
      message: `"${word}" ce mot n'est pas dans le vocabulaire.`,
      error: true,
    });
  } finally {
    submittedWord.value = "";

    // Émettre les résultats mis à jour à Game.vue
    emitted("resultsUpdated", similarityResults.value);
  }
};

// Fonction pour sauvegarder le résultat du jeu dans Firebase
const saveGameResult = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.error("Utilisateur non authentifié.");
    return;
  }

  const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  const timestamp = new Date().toISOString().replace(/[.:"T]/g, "_");

  const userWordsRef = firebaseRef(database, `users/${user.uid}/words`);

  try {
    // Vérifier si le mot a déjà été trouvé pour la date actuelle
    const snapshot = await get(userWordsRef);
    const userWordsData = snapshot.val() || {};

    const alreadyFound = Object.values(userWordsData).some(
        (entry) => entry.word === props.randomWord && entry.date === currentDate
    );

    if (alreadyFound) {
      console.log(`Le mot "${props.randomWord}" a déjà été trouvé pour la date ${currentDate}.`);
      return; // Ne pas sauvegarder à nouveau
    }

    // Sauvegarder si le mot n'a pas encore été trouvé pour la date actuelle
    const dataToSave = {
      date: currentDate, // Date au format YYYY-MM-DD
      word: props.randomWord,
      attempts: attemptsCount.value,
    };

    await set(firebaseRef(database, `users/${user.uid}/words/${timestamp}`), dataToSave);
    console.log("Résultat sauvegardé avec succès pour l'utilisateur :", user.uid);
  } catch (error) {
    console.error("Erreur lors de la vérification ou de la sauvegarde :", error);
  }
};


</script>


<style scoped>
@import '@/assets/css/similarityChecker.css';

.success {
  color: green;
  font-weight: bold;
}



</style>
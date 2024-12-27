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
  const currentTime = new Date().getTime();

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const storedWord = data.word;
      const storedTimestamp = data.timestamp;
      const oneDay = 86_400_000;
      if (currentTime - storedTimestamp < oneDay) {
        randomWord.value = storedWord;
        emit("wordGenerated", storedWord);
        return;
      }
    }

    const newWord = await fetchRandomWordAPI();
    await set(dbRef, { word: newWord, timestamp: currentTime });
    randomWord.value = newWord;
    emit("wordGenerated", newWord);

    const wordKey = `${currentTime}`;
    await set(firebaseRef(database, `old-words/${wordKey}`), {
      word: newWord,
      timestamp: currentTime,
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

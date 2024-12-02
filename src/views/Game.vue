<template>
  <div>
    <p v-if="pseudo">Bonjour {{ pseudo }}</p>
    <RandomWord @wordGenerated="setRandomWord" />
    <SimilarityChecker :randomWord="randomWord" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, database, ref as firebaseRef, get } from "@/firebase";
import RandomWord from "@/components/RandomWord.vue";
import SimilarityChecker from "@/components/SimilarityChecker.vue";

const randomWord = ref("");
const pseudo = ref("");

const setRandomWord = (word) => {
  randomWord.value = word;
};

const fetchPseudo = async () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = firebaseRef(database, `users/${user.uid}`);
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        pseudo.value = snapshot.val().pseudo;
      }
    } catch (error) {
      console.error(error);
    }
  }
};

onMounted(() => {
  fetchPseudo();
});
</script>

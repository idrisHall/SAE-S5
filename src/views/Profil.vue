<template>
  <div>
    <h1>Vos Mots{{ userPseudo ? ` - ${userPseudo}` : '' }}</h1>
    <p>Mots trouvés {{ foundWordsCount }}/{{ totalWordsCount }}</p>
    <ul>
      <li
        v-for="(oldWord, key) in oldWords"
        :key="key"
        :class="{'found': isWordFound(oldWord.word), 'not-found': !isWordFound(oldWord.word)}"
      >
        {{ oldWord.word }} 
        <span>(Mot du {{ getWordDate(key) }})</span>
        <span v-if="isWordFound(oldWord.word)"> - en {{ getWordAttempts(oldWord.word) }} coups</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref as dbRef } from "firebase/database";

// Initialisation Firebase
const auth = getAuth();
const db = getDatabase();

const oldWords = ref({});
const userWords = ref({});
const userPseudo = ref('');

const user = ref(auth.currentUser);

if (user.value) {
  const userId = user.value.uid;

  onValue(dbRef(db, `users/${userId}/pseudo`), (snapshot) => {
    userPseudo.value = snapshot.val() || '';
  });

  onValue(dbRef(db, `users/${userId}/words`), (snapshot) => {
    userWords.value = snapshot.val() || {};
  });
}

onValue(dbRef(db, 'old-words'), (snapshot) => {
  oldWords.value = snapshot.val() || {};
});

const isWordFound = (word) => {
  return Object.values(userWords.value).some((entry) => entry.word === word);
};

const getWordDate = (key) => {
  return oldWords.value[key]?.timestamp ? new Date(oldWords.value[key].timestamp).toLocaleDateString() : '';
};

const getWordAttempts = (word) => {
  const foundEntry = Object.values(userWords.value).find((entry) => entry.word === word);
  return foundEntry?.attempts || '-';
};

const foundWordsCount = computed(() => {
  return Object.values(oldWords.value).filter((oldWord) => isWordFound(oldWord.word)).length;
});

const totalWordsCount = computed(() => {
  return Object.keys(oldWords.value).length;
});
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px;
  font-size: 18px;
}

.found {
  color: green;
}

.not-found {
  color: red;
}
</style>

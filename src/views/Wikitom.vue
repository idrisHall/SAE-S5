<template>
  <div class="wiki-container">
    <h1>WIKITOM</h1>

    <button @click="fetchRandomPage">Charger une page aléatoire</button>
    <div>
      <input v-model="inputWord" placeholder="Entrez un mot" />
      <button @click="submitWord">Valider</button>
    </div>
    <div v-if="page">
      
      <div class="masked-container">
        <h2 class="masked-title" v-html="maskedTitle"></h2>
        <p v-if="titleGuessed" class="win-message">GG, t'as gagné !</p>
        <hr />
        <p v-html="maskedText"></p>
      </div>
      <!--<h2>Texte en clair</h2>
      <p class="clear-text">{{ page.title }}</p>
      <p class="clear-text">{{ page.extract }}</p>-->
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const page = ref(null);
const inputWord = ref("");
const revealedWords = ref(new Set());
const partiallyRevealedWords = ref(new Map());
const titleRevealedWords = ref(new Map());
const titleGuessed = ref(false);

const normalizeWord = (word) => {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const fetchRandomPage = async () => {
  try {
    const response = await fetch("https://approximot-1967d63b9545.herokuapp.com/current-wiki");
    if (!response.ok) throw new Error("Erreur lors de la récupération de la page.");
    
    const data = await response.json();
    
    if (!data || !data.title || !data.extract) throw new Error("Données invalides reçues.");

    page.value = {
      title: data.title,
      extract: data.extract
    };

    revealedWords.value.clear();
    partiallyRevealedWords.value.clear();
    titleRevealedWords.value.clear();
    titleGuessed.value = false;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};

const incrementWikiFoundCount = async () => {
  try {
    await fetch("https://approximot-1967d63b9545.herokuapp.com/increment-wiki-found-count", {
      method: "POST",
    });
    console.log("Succès : compteur incrémenté !");
  } catch (error) {
    console.error("Erreur lors de l'incrémentation du compteur:", error);
  }
};


const submitWord = () => {
  if (inputWord.value.trim()) {
    const normalizedInput = normalizeWord(inputWord.value);

    if (normalizeWord(page.value.title) === normalizedInput) {
      titleGuessed.value = true;
      titleRevealedWords.value.clear();
      incrementWikiFoundCount();
    }

    page.value.title.split(" ").forEach((word, index) => {
      if (normalizeWord(word) === normalizedInput) {
        titleRevealedWords.value.set(index, word);
      }
    });

    revealedWords.value.add(normalizedInput);
    inputWord.value = "";
  }
};

const revealTitleWordLength = (index, word) => {
  titleRevealedWords.value.set(index, word.length);
};

const maskedTitle = computed(() => {
  if (!page.value || !page.value.title) return "";

  if (titleGuessed.value) {
    return page.value.title;
  }

  return page.value.title.split(" ").map((word, index) => {
    if (titleRevealedWords.value.has(index)) {
      const value = titleRevealedWords.value.get(index);
      return `<span class='masked revealed-title' style="--word-length:${word.length}" onclick="event.stopPropagation()">${value}</span>`;
    }

    return `<span class='masked' style="--word-length:${word.length}" onclick="event.stopPropagation(); window.revealTitleWordLength(${index}, '${word}')">${'█'.repeat(word.length)}</span>`;
  }).join(" ");
});

const revealWordLength = (id) => {
  partiallyRevealedWords.value.set(id, true);
};

const maskedText = computed(() => {
  if (!page.value || !page.value.extract) return "";

  let wordIndex = 0;

  return page.value.extract.replace(/[\wÀ-ÿ]+/g, (word) => {
    if (/\d/.test(word)) {
      return word;
    }

    const normalizedWord = normalizeWord(word);
    const wordId = `${normalizedWord}-${wordIndex++}`;

    if (revealedWords.value.has(normalizedWord)) {
      return word;
    }

    if (partiallyRevealedWords.value.has(wordId)) {
      return `<span class='masked revealed' style="--word-length:${word.length}" onclick="event.stopPropagation()">${word.length}</span>`;
    }

    return `<span class='masked' style="--word-length:${word.length}" onclick="event.stopPropagation(); window.revealWordLength('${wordId}')">${'█'.repeat(word.length)}</span>`;
  });
});

onMounted(() => {
  fetchRandomPage();
  window.revealWordLength = revealWordLength;
  window.revealTitleWordLength = revealTitleWordLength;
});
</script>

<style>
.wiki-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: #f1e173;
  color: #1a1a1a;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #d9c263;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  margin-top: 20px;
  color: #ffffff;
}

p {
  color: #ffffff;
}

.clear-text {
  text-align: justify;
  line-height: 1.6;
  padding: 10px;
  border-radius: 5px;
}

.masked-container {
  border: 2px solid #f1e173;
  padding: 20px;
  border-radius: 8px;
  text-align: justify;
  line-height: 1.6;
}

.masked {
  background-color: #2a2a2a;
  color: #2a2a2a;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1ch * var(--word-length));
  height: 1.4em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.revealed, .revealed-title {
  background-color: #f1e173;
  color: #2a2a2a;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: calc(1ch * var(--word-length));
  height: 1.4em;
  border-radius: 3px;
  text-align: center;
}


.masked-title {
  color: #ffffff;
}

.win-message {
  color: #f1e173;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
}

hr {
  border: none;
  height: 2px;
  background-color: #f1e173;
  margin: 20px 0;
}
h1{
  color : white;
}
</style>

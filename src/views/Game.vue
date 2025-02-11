<template>
  <div class="gray-box">
    <p v-if="isConnected && pseudo" class="pseudoGame">Bonjour {{ pseudo }}</p>
    <p v-else-if="isConnected">Bonjour {{ email }}</p>
    <p v-else>Bonjour, vous jouez en mode invité</p>

    <!-- Conteneur pour MotBox -->
    <div class="MotBox">
      <SimilarityChecker
          :randomWord="randomWord"
          @resultsUpdated="updateSimilarityResults"
          @endGameUpdated="updateEndGame"
      />
      <br />
    </div>

    <!-- Affichage du mot aléatoire -->
    <p class="mot-du-jour">Mot du jour : <strong>{{ randomWord }}</strong></p>

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
import { authMobile, firestoreMobile } from "@/firebaseMobile";
import { doc, getDoc } from "firebase/firestore";
import SimilarityChecker from "@/components/SimilarityChecker.vue";
import { fetchRandomWordAPI } from "@/services/api"; // Importer la fonction pour récupérer le mot aléatoire

const randomWord = ref(""); // Stocker le mot du jour
const pseudo = ref("");
const email = ref("");
const isConnected = ref(false);
const similarityResults = ref([]); // Stocker les résultats ici

const router = useRouter();

const fetchPseudoAndEmail = async () => {
  const user = authMobile.currentUser;
  if (user) {
    isConnected.value = true;
    email.value = user.email;
    const userDocRef = doc(firestoreMobile, "users", user.uid);
    try {
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        pseudo.value = userDoc.data().displayName || "";
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des informations utilisateur :", error);
    }
  }
};

const fetchRandomWord = async () => {
  try {
    randomWord.value = await fetchRandomWordAPI(); // Récupérer le mot du jour
    console.log("Mot du jour récupéré :", randomWord.value);
  } catch (error) {
    console.error("Erreur lors de la récupération du mot aléatoire :", error);
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
  fetchRandomWord(); // Charger le mot aléatoire au montage du composant
});

const showDefinition = async (word) => {
  if (!endGame.value) {
    return;
  }
  if (!word) {
    alert("Veuillez entrer un mot valide.");
    return;
  }

  try {
    // Appel à l'API Node.js
    const response = await axios.post('http://localhost:3000/api/definition', { word });

    const data = response.data;

    if (data.error) {
      alert(`Erreur : ${data.error}`);
      return;
    }

    // Construction de la définition
    let definitionMessage = `Définition de "${data.motWiki}":\n\n`;

    if (data.natureDef && data.natureDef.length > 0) {
      data.natureDef.forEach((nature, index) => {
        definitionMessage += `Classe grammaticale ${index + 1}: ${data.nature[index] || "Non spécifiée"}\n`;

        nature.forEach((definitions, defIndex) => {
          if (Array.isArray(definitions)) {
            definitions.forEach((subDef, subDefIndex) => {
              definitionMessage += `  ${index + 1}.${subDefIndex + 1}: ${
                  typeof subDef === "object" ? JSON.stringify(subDef, null, 2) : subDef
              }\n`;
            });
          } else {
            definitionMessage += `  ${index + 1}.${defIndex + 1}: ${
                typeof definitions === "object" ? JSON.stringify(definitions, null, 2) : definitions
            }\n`;
          }
        });
      });
    } else {
      definitionMessage += "Définition indisponible.";
    }

    // Limite pour éviter une alerte trop longue
    if (definitionMessage.length > 2000) {
      console.warn("Le message est trop long pour être affiché dans une alerte.");
      alert("Le contenu est trop long pour être affiché en entier. Veuillez consulter la console pour plus de détails.");
      console.log(definitionMessage);
    } else {
      alert(definitionMessage);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la définition :", error);
    alert("Une erreur s'est produite. Veuillez réessayer.");
  }
};
</script>

<style scoped>
@import '@/assets/css/Game.css';

.mot-du-jour {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}
</style>




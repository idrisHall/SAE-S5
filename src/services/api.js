import axios from "axios";

export async function fetchRandomWordAPI() {
  const response = await axios.get(import.meta.env.VITE_API_RANDOM_WORD);
  return response.data.word;
}

export async function checkWordSimilarity(word1, word2) {
  try {
    const response = await axios.post(
      import.meta.env.VITE_API_SIMILARITY,
      { word1, word2 },
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    );

    if (response.data && response.data.similarity !== undefined) {
      return {
        word1: word1,
        word2: word2,
        similarity: response.data.similarity
      };
    }
    throw new Error("Aucune similarité trouvée.");
  } catch (error) {
    console.error("Erreur lors de la requête POST :", error);
    throw new Error("Erreur lors de la récupération de la similarité.");
  }
}

export async function checkWordIdentical(word1, word2) {
  try {
    const similarityResult = await checkWordSimilarity(word1, word2);

    const identical = Math.round(similarityResult.similarity, 2) === 1.0;
    
    return {
      word1,
      word2,
      identical,
      reason: identical ? "Les mots sont strictement identiques." : "Les mots ne sont pas strictement identiques."
    };
    console.log("identical ? ", identical )
  } catch (error) {
    console.error("Erreur lors de la vérification de l'identité :", error);
    throw new Error("Erreur lors de la récupération de l'identité des mots.");
  }
}

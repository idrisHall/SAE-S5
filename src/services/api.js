import axios from "axios";

export async function fetchRandomWordAPI() {
  const response = await axios.get("http://127.0.0.1:8000/api/random_word");
  return response.data.random_word;
}

export async function checkWordSimilarity(word1, word2) {
  const response = await axios.get("http://127.0.0.1:8000/api/word_similarity", {
    params: { word1, word2 },
    headers: { "Accept": "application/json" }
  });
  if (response.data && response.data.similarity !== undefined) {
    return {
      word1: response.data.word1,
      word2: response.data.word2,
      similarity: response.data.similarity
    };
  }
  throw new Error("Aucune similarité trouvée.");
}

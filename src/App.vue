<template>
  <div id="app">
    <nav>
      <router-link to="/Home" class="logo">
        <img src="/images/logo.png" alt="Logo" />
        <span class="logo-text">Approximot</span>
      </router-link>

      <div class="center-links">
        <router-link to="/Game">Solo</router-link>
        <router-link to="/collaboration">Jouer avec un ami</router-link>
        <router-link to="/affrontement">Affronter un ami</router-link>
        <!-- Affiche ce lien uniquement si l'utilisateur n'est pas connecté -->
        <router-link to="/register" v-if="!isLoggedIn">S'inscrire</router-link>
      </div>

      <!-- Bouton de déconnexion affiché si connecté -->
      <button @click="handleSingOut" class="se-connecter" v-if="isLoggedIn">Déconnexion</button>
      <!-- Bouton de connexion affiché si non connecté -->
      <router-link to="/login" class="se-connecter" v-if="!isLoggedIn">Se connecter</router-link>
    </nav>
    <router-view />
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { auth } from '@/firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import router from '@/router';

const isLoggedIn = ref(false);

// Surveiller les changements d'état de connexion
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; // Met à jour isLoggedIn en fonction de l'état de connexion
  });
});

// Gestion de la déconnexion
const handleSingOut = () => {
  signOut(auth).then(() => {
    router.push("/"); // Redirige vers la page d'accueil après déconnexion
  }).catch((error) => {
    console.error("Erreur lors de la déconnexion :", error);
  });
};
</script>


<style>
@import '@/assets/css/navbar.css';
</style>

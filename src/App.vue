<template>
  <div id="app">
    <nav>
      <router-link to="/Home" class="logo">
        <img src="../public/images/Logo.png" alt="Logo" />
        <span class="logo-text">Approxi’mot</span>
      </router-link>
      <!-- Rubriques centrales dans un conteneur -->
      <div class="center-links">
        <router-link to="/Home">Home</router-link>
        <router-link to="/Game">Solo</router-link>
        <router-link to="/register">Register</router-link>
      </div>

      <!-- Lien "Se connecter" isolé à droite -->
      <router-link to="/login" class="se-connecter">Se connecter</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import {auth} from '@/firebase.js';
import {onAuthStateChanged, signOut} from 'firebase/auth'
import router from '@/router';

const isLoggedIn = ref(false);

onMounted(()=>{
 
  onAuthStateChanged(auth, (user) => {
    if(user){
      isLoggedIn.value = true
    }else{
      isLoggedIn.value = false
    }
  });
});

const handleSingOut = () => {
  signOut(auth).then(() => {
    router.push("/")
  })
}

</script>

<style>
@import '@/assets/css/navbar.css';
</style>

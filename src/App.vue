<template>
  <div id="app">
    <nav>
      <router-link to="/Home" class="logo">
        <img src="../public/images/Logo.png" alt="Logo" />
        <span class="logo-text">Approximot</span>
      </router-link>
  
      <div class="center-links">
        <router-link to="/Home">Home</router-link>
        <router-link to="/Game">Solo</router-link>
        <router-link to="/collaboration">Jouer avec un ami</router-link>
        <router-link to="/affrontement">Affronter un ami</router-link>
        <router-link to="/register">S'inscrire</router-link>      
      </div>

      <button @click="handleSingOut" class="se-connecter" v-if="isLoggedIn">Sign out</button>
      <router-link to="/login" class="se-connecter" v-if="!isLoggedIn">Se connecter</router-link>
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

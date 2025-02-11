<template>
  <div class="container">
    <video autoplay muted loop playsinline class="background-video">
      <source src="../../public/videos/fondLetter.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <header class="header">
      <h1 class="title">Inscription</h1>
    </header>
    <main class="main-content">
      <div class="form-container">
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="pseudo">Pseudo</label>
            <input id="pseudo" type="text" name="pseudo" v-model="pseudo" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input id="password" name="password" type="password" v-model="password" required>
          </div>
          <button class="submit-button" type="submit">M'inscrire</button>
        </form>
        <div class="login-link">
          <p><button @click="signInWithGoogle">S'inscrire avec Google</button></p>
          <p>Vous avez déjà un compte ? <router-link to="/login">Se connecter</router-link></p>
        </div>
      </div>
    </main>
  </div>
  </template>
    <script setup>
  import { ref as vueRef } from "vue";
  import { useRouter } from "vue-router";
  import { authMobile, firestoreMobile } from "@/firebaseMobile";
  import { doc, setDoc } from "firebase/firestore";
  import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
  const email = vueRef("");
  const password = vueRef("");
  const pseudo = vueRef("");
  const router = useRouter();
  
  const register = async () => {
    try {
      const data = await createUserWithEmailAndPassword(authMobile, email.value, password.value);
      const user = data.user;
      const userDocRef = doc(firestoreMobile, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        displayName: pseudo.value,
        createdAt: new Date().toISOString(),
        lastSeen: new Date().toISOString(),
        photoURL: "",
        singlePlayerGuesses: []
      });
      router.push("/game");
    } catch (error) {
      alert(error.message);
    }
  };
  
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(authMobile, provider);
      const user = result.user;
      const userDocRef = doc(firestoreMobile, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        displayName: pseudo || user.displayName,
        createdAt: new Date().toISOString(),
        lastSeen: new Date().toISOString(),
        photoURL: user.photoURL || "",
        singlePlayerGuesses: []
      });
      router.push("/game");
    } catch (error) {
      alert(error.message);
    }
  };
  </script>
  
  <style>
  @import "@/assets/css/auth.css";
  @import "@/assets/css/login.css";
  </style>
  
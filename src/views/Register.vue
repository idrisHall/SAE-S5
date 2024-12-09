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
            <form method="POST">
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
                    <input id="password" name="password" type="password"  v-model="password" required>
                </div>
                <button @click="register" class="submit-button" type="submit">M'inscrire</button>
            </form>
            <div class="login-link">
                <p><button @click="signInWithGoogle">S'incrire avec Google</button></p>
                <p>Vous avez déjà un compte ? <router-link to="/login">Se connecter</router-link></p>
            </div>
        </div>

    </main>
</div>
</template>

<script setup>
import { ref as vueRef } from "vue";
import { useRouter } from "vue-router";
import { auth, database, ref, set } from "@/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const email = vueRef("");
const password = vueRef("");
const pseudo = vueRef("");
const router = useRouter();

const register = (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      const user = data.user;
      const userRef = ref(database, `users/${user.uid}`);
      set(userRef, {
        email: user.email,
        pseudo: pseudo.value,
        createdAt: new Date().toISOString(),
      });
      router.push("/game");
    })
    .catch((error) => {
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const userRef = ref(database, `users/${user.uid}`);
      set(userRef, {
        email: user.email,
        pseudo: user.displayName || "Pseudo par défaut",
        createdAt: new Date().toISOString(),
      });
      router.push("/game");
    })
    .catch((error) => {
      alert(error.message);
    });
};
</script>


<style>
@import "@/assets/css/auth.css";
@import "@/assets/css/login.css";

</style>
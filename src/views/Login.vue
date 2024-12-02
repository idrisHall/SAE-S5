<template>
  <div class="container">
    <!-- Vidéo en arrière-plan -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="../../public/videos/fondLetter.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <header class="header">
        <h1 class="title">Connexion</h1>
    </header>
    <main class="main-content">
        <div class="form-container">
            <form method="POST">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" name="email" v-model="email" required>
                    <p v-if="errMsg">{{ errMsg }}</p>
                </div>
                <div class="form-group">
                    <label for="password">Mot de passe</label>
                    <input id="password" name="password" type="password" v-model="password" required>
                </div>
              <button @click="register" class="submit-button" type="submit">Me connecter</button>
            </form>
            <div class="login-link">
                <p><button @click="signInWithGoogle">Se connecter avec Google</button></p>
                <p>Vous n'avez pas de compte ? <a href="#">S'inscrire</a></p>
            </div>
        </div>

    </main>
</div>
  </template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { auth } from "@/firebase";
  import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

  const email = ref("");
  const password = ref("");
  const errMsg = ref("");
  const router = useRouter();

  const register = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully signed in !");
        router.push("/game");
      })
      .catch((error) => {
        console.error(error.code);
        if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
          errMsg.value = "Email ou mot de passe incorrect";
        } else if (error.code === "auth/invalid-email") {
          errMsg.value = "Adresse email invalide";
        } else {
          errMsg.value = "Une erreur est survenue. Veuillez réessayer.";
        }
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In successful!", result.user);
        router.push("/game");
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };
  </script>

<style>
@import "@/assets/css/auth.css";
@import "@/assets/css/login.css";
</style>


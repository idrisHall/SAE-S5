<template>
  <div class="container">
    <!-- Vidéo en arrière-plan -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="/videos/fondLetter.mp4" type="video/mp4" />
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
          <p>Vous n'avez pas de compte ? <router-link to="/register">S'inscrire</router-link></p>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref as vueRef } from "vue";
import { useRouter } from "vue-router";
import { authMobile} from "@/firebaseMobile"
import { database, ref, set, get } from "@/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const email = vueRef("");
const password = vueRef("");
const errMsg = vueRef("");
const router = useRouter();

const register = (event) => {
  event.preventDefault();
  if (!email.value && !password.value) {
    errMsg.value = "Veuillez compléter tous les champs";
    return;
  }
  if (!email.value) {
    errMsg.value = "Veuillez entrer une adresse mail valide.";
    return;
  }
  if (!password.value) {
    errMsg.value = "Veuillez entrer votre mot de passe.";
    return;
  }
  signInWithEmailAndPassword(authMobile, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in !");
      router.push("/game");
    })
    .catch((error) => {
      console.error(error.code);
      if (error.code === "auth/invalid-credential") {
        errMsg.value = "Email ou mot de passe incorrect";
      } else {
        errMsg.value = "Une erreur est survenue. Veuillez réessayer.";
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authMobile, provider)
    .then(async (result) => {
      const user = result.user;
      const userRef = ref(database, `users/${user.uid}`);
      
      // Vérifier si l'utilisateur existe déjà dans la base de données
      const userSnapshot = await get(userRef);
      if (!userSnapshot.exists()) {
        await set(userRef, {
          email: user.email,
          pseudo: user.displayName || "Pseudo par défaut",
          createdAt: new Date().toISOString(),
        });
      }

      console.log("Google Sign-In successful!", user);
      router.push("/game");
    })
    .catch((error) => {
      console.error("Erreur lors de la connexion :", error.code, error.message);
      alert(error.message);
    });
};

</script>

<style>
@import "@/assets/css/auth.css";
@import "@/assets/css/login.css";
</style>

<template>
  <div>
    <div class="image-container">
      <div class="text-accueil">
        <h1 style="margin-right: 28%">Es-tu prêt à relever le défi ?</h1>
        <br />
        <h1 style="margin-right: 28%">Devine le mot du jour !</h1>

        <div class="bottom-button">
          <router-link to="/game"><button style="margin-right: 30%" class="btn-custom">J’essaye !</button></router-link>
        </div>
      </div>

      <img src="/images/Subtract.png" alt="Image en bas droite" class="bottom-right-img" />
    </div>
  </div>
</template>

<script setup>
</script>


<style>
@import '@/assets/css/home.css';
</style>



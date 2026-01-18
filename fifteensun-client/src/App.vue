<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="wrap">
      <div class="brand">
        <img src="/assets/logos/fifteensun.png" alt="FifteenSun" />
        <span>FifteenSun</span>
      </div>
      <nav class="nav" aria-label="Main">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/photos">Photos</router-link>
        <router-link to="/stream">Stream</router-link>
        <router-link to="/extralife">Extra Life</router-link>
      </nav>
    </div>
    <div v-if="mobileOpen" class="mobile-menu">
      <router-link to="/" @click.native="mobileOpen=false">Home</router-link>
      <router-link to="/about" @click.native="mobileOpen=false">About</router-link>
      <router-link to="/photos" @click.native="mobileOpen=false">Photos</router-link>
      <router-link to="/stream" @click.native="mobileOpen=false">Stream</router-link>
      <router-link to="/extralife" @click.native="mobileOpen=false">Extra Life</router-link>
    </div>
  </header>

  <main class="main">
    <router-view />
  </main>

  <footer class="footer">
    <div class="wrap">
      <div>© {{ new Date().getFullYear() }} FifteenSun</div>
    </div>
  </footer>
</template>

<style scoped></style>

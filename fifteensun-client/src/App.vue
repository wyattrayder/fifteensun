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
        <router-link to="/events">Events</router-link>
        <router-link to="/photos">Photos</router-link>
        <router-link to="/stream">Stream</router-link>
      </nav>
      <button
        class="hamburger"
        aria-label="Toggle navigation menu"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        @click="mobileOpen = !mobileOpen"
      >
        ☰
      </button>
    </div>
    <div v-if="mobileOpen" class="mobile-menu" @click.self="mobileOpen=false">
      <router-link to="/" @click="mobileOpen=false">Home</router-link>
      <router-link to="/about" @click="mobileOpen=false">About</router-link>
      <router-link to="/events" @click="mobileOpen=false">Events</router-link>
      <router-link to="/photos" @click="mobileOpen=false">Photos</router-link>
      <router-link to="/stream" @click="mobileOpen=false">Stream</router-link>
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

<style scoped>
.header { position: sticky; top: 0; z-index: 1000; background: transparent; }
.wrap { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 16px; }
.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; }
.brand img { height: 32px; width: 32px; object-fit: contain; }

.nav { display: none; gap: 16px; }
.nav a { padding: 8px 10px; border-radius: 8px; }

/* Make hamburger visible and aligned with site colors */
.hamburger { display: inline-flex; align-items: center; justify-content: center; padding: 8px 12px; font-size: 20px; border: 1px solid rgba(0,0,0,0.12); background: #fff; color: #222; border-radius: 8px; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }

/* Light-themed mobile menu */
.mobile-menu { position: absolute; left: 0; right: 0; top: 100%; background: #ffffff; color: #222; display: flex; flex-direction: column; gap: 6px; padding: 10px 16px 14px; border-bottom: 1px solid rgba(0,0,0,0.06); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
.mobile-menu a { padding: 10px 12px; border-radius: 8px; }
.mobile-menu a.router-link-active { background: rgba(0,0,0,0.04); }

@media (min-width: 768px) {
  .nav { display: inline-flex; }
  .hamburger { display: none; }
  .mobile-menu { display: none; }
}
</style>

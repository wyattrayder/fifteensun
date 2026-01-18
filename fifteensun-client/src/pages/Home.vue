<script setup>
</script>

<template>
  <section class="hero hero-angled">
    <div class="angle angle-1"></div>
    <div class="angle angle-2"></div>
    <div class="angle angle-3"></div>
    <div class="angle angle-4"></div>
    <div class="angle angle-5"></div>
    <div class="angle angle-6"></div>
    <div class="hero-inner">
      <div class="brand-lockup">
        <img :src="'/assets/logos/fifteensun.png'" alt="FifteenSun Logo" class="brand-logo" />
      </div>
      <h1 class="slogan">Playing Games. Saving Lives.</h1>
      <!-- <div class="cta-row">
        <a class="btn btn-primary" href="https://twitch.tv/fifteensun" target="_blank">Watch on Twitch</a>
        <a class="btn btn-secondary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank">Donate to Extra Life</a>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.hero-angled { 
  position: relative; 
  min-height: calc(100vh - 64px - 48px); 
  display: grid; 
  place-items: center; 
  background: linear-gradient(180deg, var(--color-bg) 0%, #ffffff 100%);
  overflow: hidden;
}
.angle { position: absolute; z-index: 0; pointer-events: none; filter: drop-shadow(0 12px 24px rgba(0,0,0,0.12)); }
.angle-1 { 
  top: -10vh; left: -12vw; width: 42vw; height: 58vh; 
  background: var(--color-secondary);
  clip-path: polygon(0% 0%, 78% 0%, 100% 36%, 0% 100%);
}
.angle-2 { 
  bottom: -8vh; right: -10vw; width: 48vw; height: 52vh; 
  background: var(--color-primary);
  clip-path: polygon(24% 0%, 100% 0%, 100% 100%, 0% 72%);
  opacity: 0.85;
}
.hero-inner { position: relative; z-index: 2; text-align: center; padding: 32px; max-width: 900px; }
.brand-lockup { display: inline-flex; align-items: center; gap: 16px; }
.brand-logo { width: 360px; height: auto; }
.slogan { font-size: 64px; font-weight: 900; margin: 24px 0 0; letter-spacing: 0.5px; line-height: 1.05; }
.cta-row { display: inline-flex; gap: 10px; }

@media (max-width: 760px) {
  .brand-logo { width: 220px; }
  .slogan { font-size: 36px; }
}

.angle-3 {
  top: 8vh; right: 6vw;
  width: 28vw; height: 18vh;
  background: var(--color-accent);
  clip-path: polygon(0 40%, 100% 0, 100% 100%, 14% 100%);
  opacity: 0.75;
}
.angle-4 {
  bottom: -6vh; left: 2vw;
  width: 30vw; height: 20vh;
  background: var(--color-secondary);
  clip-path: polygon(0 0, 85% 0, 100% 65%, 10% 100%);
  opacity: 0.8;
}
.angle-5 {
  top: -4vh; left: 50%; transform: translateX(-50%);
  width: 65vw; height: 18vh;
  background: var(--color-primary);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  opacity: 0.6;
}

.angle-6 {
  top: 35vh; left: -4vw;
  width: 22vw; height: 22vh;
  background: var(--color-accent);
  clip-path: polygon(0 20%, 88% 0, 100% 80%, 12% 100%);
  opacity: 0.7;
}

/* Animations removed per request */
</style>
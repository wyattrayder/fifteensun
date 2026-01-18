<script setup>
</script>

<template>
  <section class="container extralife">
    <!-- Hero / Intro -->
    <div class="grid cols-2 hero">
      <div class="copy">
        <h1>Extra Life</h1>
        <p class="lead">
          Extra Life unites thousands of gamers to play games and raise funds for local Children's Miracle Network
          Hospitals. I'm proud to support <strong>Arkansas Children's Hospital</strong>.
        </p>
        <p>
          Your donation goes directly to help kids get the care they need. Every bit of support helps our team reach new
          milestones and make a real difference.
        </p>
        <div class="actions">
          <a class="btn btn-secondary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank" rel="noopener noreferrer">Visit My Page</a>
          <a class="btn btn-primary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank" rel="noopener noreferrer">Donate Now</a>
        </div>
      </div>
      <img class="hero-image" :src="'/assets/logos/extralife.png'" alt="Extra Life" />
    </div>
  </section>
</template>

<style scoped>
.extralife { padding-block: 40px; }

/* Match About page hero styles and mobile reordering */
.hero { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: 'copy image'; align-items: center; gap: 28px; }
.copy { grid-area: copy; }
.hero-image { grid-area: image; width: 100%; height: 560px; object-fit: contain; }

h1 { font-size: clamp(2.4rem, 3.6vw, 3.2rem); line-height: 1.15; margin: 0 0 16px; }
.lead { font-size: 1.25rem; line-height: 1.8; }
p { font-size: 1.125rem; line-height: 1.9; }

.actions { margin-top: 12px; }
.btn { font-size: 1.0625rem; padding: 12px 18px; }
.btn + .btn { margin-left: 12px; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; grid-template-areas: 'image' 'copy'; }
  .hero-image { height: 420px; }
}
</style>
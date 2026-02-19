<script setup>
</script>

<template>
  <section class="container merch">
    <!-- Hero / Intro with Image -->
    <div class="hero">
      <img class="hero-image" src="/assets/logos/Merch.png" alt="FifteenSun Merch Collection" />
      <div class="copy">
        <h1>FifteenSun Merch</h1>
        <p class="lead">
          Support FifteenSun and help kids at Arkansas Children's Hospital!
        </p>
        <p>
          <strong>100%</strong> of the profits made from merch sales goes directly to my <strong>Extra Life campaign</strong>. When you buy FifteenSun merch, you're not just getting cool gear, you're helping me reach my fundraising goal and make a real difference for children in need!
        </p>
        <div class="actions">
          <a class="btn btn-primary btn-large" href="https://streamlabs.com/fifteensun/merch" target="_blank" rel="noopener noreferrer">Shop Now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.merch { padding-block: 40px; }

.hero { 
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas: 'image copy';
  align-items: center;
  gap: 40px;
}

.hero-image { 
  grid-area: image;
  width: 100%;
  height: auto; 
  object-fit: contain;
}

.copy {
  grid-area: copy;
  max-width: none;
}

h1 { font-size: clamp(2.4rem, 3.6vw, 3.2rem); line-height: 1.15; margin: 0 0 16px; }

.lead { font-size: 1.25rem; line-height: 1.8; }
p { font-size: 1.125rem; line-height: 1.9; }

.actions {
  margin-top: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  font-size: 1.0625rem;
  padding: 12px 18px;
}

.btn-large {
  font-size: 1.375rem;
  padding: 18px 32px;
  display: inline-block;
  font-weight: 600;
}

@media (max-width: 900px) {
  .merch { padding-block: 24px; }
  
  .hero {
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'copy';
    gap: 28px;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>

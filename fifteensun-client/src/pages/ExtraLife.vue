<script setup>
</script>

<template>
  <section class="container">
    <div class="grid cols-2">
      <div>
        <h2>Extra Life</h2>
        <p>
          Extra Life unites thousands of gamers to play games and raise funds for local Children's Miracle Network
          Hospitals. I'm proud to support <strong>Arkansas Children's Hospital</strong>. Your donation goes directly to
          help kids get the care they need.
        </p>
        <a class="btn btn-secondary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank">Visit My Extra Life Page</a>
        <a class="btn btn-primary" href="https://www.extra-life.org/participant/FifteenSun" target="_blank" style="margin-left:8px;">Donate Now</a>
      </div>
      <div class="card" style="padding: 16px; display:flex; align-items:center; justify-content:center;">
        <img :src="'/assets/logos/extralife.png'" alt="Extra Life" style="height:200px; object-fit:contain;" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
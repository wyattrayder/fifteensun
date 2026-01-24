<script setup>
</script>

<template>
  <section class="container events">
    <div class="hero">
      <div class="copy">
        <h1>Events</h1>
        <p class="lead">
          Here you'll find a calendar with upcoming events and stream dates. Check back often for new charity streams,
          special broadcasts, and community activities.
        </p>
        <p>
          Add the calendar to your own schedule to stay in the loop and feel free to swing by live when you see a stream planned!
        </p>
        <div class="actions">
          <router-link class="btn btn-secondary" :to="{ hash: '#calendar' }">View Calendar</router-link>
        </div>
      </div>
      <img class="hero-image" src="/assets/logos/FifteenSun-2024.png" alt="FifteenSun 2024" />
    </div>

    <div class="calendar" id="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=fifteensunttv%40gmail.com&ctz=America%2FChicago"
        title="FifteenSun Events Calendar"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        style="border:0; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.12);"
      ></iframe>
    </div>
  </section>
  
</template>

<style scoped>
.events { padding-block: 32px; }
.hero { display: grid; grid-template-columns: 1fr 1fr; grid-template-areas: 'copy image'; gap: 20px; align-items: center; }
.copy { grid-area: copy; }
.hero-image { grid-area: image; width: 100%; height: 560px; object-fit: cover; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.calendar { width: 100%; height: clamp(420px, 64vh, 600px); margin-top: 16px; scroll-margin-top: 80px; }

h1 { font-size: clamp(2.4rem, 3.6vw, 3.2rem); line-height: 1.15; margin: 0 0 12px; }
.lead { font-size: 1.25rem; line-height: 1.8; }
p { font-size: 1.125rem; line-height: 1.9; }
.actions { margin-top: 12px; }
.btn { font-size: 1.0625rem; padding: 12px 18px; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; grid-template-areas: 'image' 'copy'; }
  .hero-image { height: 420px; }
  .calendar { height: clamp(380px, 62vh, 540px); }
}
</style>
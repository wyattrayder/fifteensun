<script setup>
import { computed } from 'vue'

const twitchSrc = computed(() => {
  const parent = window.location.hostname || 'localhost'
  return `https://player.twitch.tv/?channel=fifteensun&parent=${parent}&muted=false`
})
</script>

<template>
  <section class="stream-layout">
    <div class="side-panel left">
      <img :src="'/assets/logos/twitch.png'" alt="Twitch" style="width:110px;" />
    </div>
    <div class="stream-player">
      <div class="player-inner">
        <iframe :src="twitchSrc" frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
      </div>
    </div>
    <div class="side-panel right">
      <img :src="'/assets/logos/fifteensun.png'" alt="FifteenSun" style="width:120px;" />
    </div>
  </section>
</template>

<style scoped>
.stream-layout { display: grid; grid-template-columns: 1fr; justify-items: center; align-items: center; overflow-x: hidden; }
.side-panel { display: none; }
.stream-player { padding: 24px 12px; width: 100%; }
.player-inner { position: relative; width: min(100%, 960px); aspect-ratio: 16 / 9; margin: 0 auto; }
.player-inner iframe { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 12px; }

@media (min-width: 900px) {
  .stream-layout { grid-template-columns: 120px minmax(0,1fr) 120px; }
  .side-panel { display: flex; align-items: center; justify-content: center; }
}
</style>
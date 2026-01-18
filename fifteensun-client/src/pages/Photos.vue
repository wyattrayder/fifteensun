<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Gallery sources (served from public/ so paths are absolute)
const photos = ref([
  '/assets/photos/24HourStream.jpeg',
  '/assets/photos/chickenforcharity.jpeg',
  '/assets/photos/chickenforcharitycolton.jpeg',
  '/assets/photos/nothingbundt.JPG',
  '/assets/photos/pokernight.jpeg',
  '/assets/photos/TripleP.jpg',
])

const viewerOpen = ref(false)
const currentSrc = ref('')

function openViewer(src) {
  currentSrc.value = src
  viewerOpen.value = true
}

function closeViewer() {
  viewerOpen.value = false
  currentSrc.value = ''
}

function onKey(e) {
  if (e.key === 'Escape') closeViewer()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <section class="container">
    <h2>Photos</h2>

    <div class="photo-grid large">
      <img
        v-for="(src, i) in photos"
        :key="i"
        :src="src"
        :alt="`Photo ${i+1}`"
        @click="openViewer(src)"
      />
    </div>

    <div v-if="viewerOpen" class="photo-modal" @click.self="closeViewer" role="dialog" aria-modal="true">
      <button class="close" @click="closeViewer" aria-label="Close">×</button>
      <img :src="currentSrc" alt="Expanded photo" />
    </div>

    <p v-if="!photos.length" style="opacity:0.7; margin-top:16px;">No photos yet. Drop images into public/assets/photos.</p>
  </section>
</template>

<style scoped>
.photo-grid.large img {
  height: 280px;
  cursor: zoom-in;
  transition: transform .15s ease-out, box-shadow .15s ease-out;
}
.photo-grid.large img:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
}

.photo-modal {
  position: fixed; inset: 0; background: rgba(0,0,0,0.85);
  display: grid; place-items: center; z-index: 20;
}
.photo-modal img {
  max-width: 92vw; max-height: 92vh; border-radius: 12px;
}
.photo-modal .close {
  position: absolute; top: 16px; right: 16px;
  width: 40px; height: 40px; border-radius: 50%; border: none;
  background: rgba(255,255,255,0.9); font-size: 22px; cursor: pointer;
}
</style>
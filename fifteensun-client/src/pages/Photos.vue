<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Gallery sources (served from public/ so paths are absolute)
const photos = ref([
  '/assets/photos/24HourStream.jpeg',
  '/assets/photos/chickenforcharity.jpeg',
  '/assets/photos/chickenforcharitycolton.jpeg',
  '/assets/photos/C4C-Josh.jpg',
  '/assets/photos/C4C-Daniel.jpg',
  '/assets/photos/nothingbundt.JPG',
  '/assets/photos/pokernight.jpeg',
  '/assets/photos/PokerNight-Tracker.jpg',
  '/assets/photos/TripleP.jpg',
  '/assets/photos/hotsuns1.jpg',
  '/assets/photos/hotsuns2.jpg',
])

const viewerOpen = ref(false)
const currentIndex = ref(-1)
const currentSrc = ref('')

function openViewer(index) {
  currentIndex.value = index
  currentSrc.value = photos.value[index]
  viewerOpen.value = true
}

function closeViewer() {
  viewerOpen.value = false
  currentSrc.value = ''
  currentIndex.value = -1
}

function nextPhoto() {
  if (!photos.value.length) return
  currentIndex.value = (currentIndex.value + 1) % photos.value.length
  currentSrc.value = photos.value[currentIndex.value]
}

function prevPhoto() {
  if (!photos.value.length) return
  currentIndex.value = (currentIndex.value - 1 + photos.value.length) % photos.value.length
  currentSrc.value = photos.value[currentIndex.value]
}

function onKey(e) {
  if (!viewerOpen.value) return
  if (e.key === 'Escape') return closeViewer()
  if (e.key === 'ArrowRight') return nextPhoto()
  if (e.key === 'ArrowLeft') return prevPhoto()
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
        @click="openViewer(i)"
      />
    </div>

    <div v-if="viewerOpen" class="photo-modal" @click.self="closeViewer" role="dialog" aria-modal="true">
      <button class="close" @click="closeViewer" aria-label="Close">×</button>
      <button class="nav prev" @click="prevPhoto" aria-label="Previous photo">❮</button>
      <img :src="currentSrc" alt="Expanded photo" />
      <button class="nav next" @click="nextPhoto" aria-label="Next photo">❯</button>
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

.photo-modal .nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 44px; height: 44px; border-radius: 50%; border: none;
  background: rgba(255,255,255,0.9); font-size: 22px; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
}
.photo-modal .nav.prev { left: 16px; }
.photo-modal .nav.next { right: 16px; }
</style>
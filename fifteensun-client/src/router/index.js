import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Photos from '@/pages/Photos.vue'
import Stream from '@/pages/Stream.vue'
import Events from '@/pages/Events.vue'
import Merch from '@/pages/Merch.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'About' } },
    { path: '/photos', name: 'photos', component: Photos, meta: { title: 'Photos' } },
    { path: '/stream', name: 'stream', component: Stream, meta: { title: 'Stream' } },
    { path: '/events', name: 'events', component: Events, meta: { title: 'Events' } },
    { path: '/merch', name: 'merch', component: Merch, meta: { title: 'Merch' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

// Update document title on navigation
router.afterEach((to) => {
  const base = 'FifteenSun'
  document.title = to.meta?.title ? `${base} - ${to.meta.title}` : base
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Photos from '@/pages/Photos.vue'
import Stream from '@/pages/Stream.vue'
import ExtraLife from '@/pages/ExtraLife.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'FifteenSun' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'About' } },
    { path: '/photos', name: 'photos', component: Photos, meta: { title: 'Photos' } },
    { path: '/stream', name: 'stream', component: Stream, meta: { title: 'Stream' } },
    { path: '/extralife', name: 'extralife', component: ExtraLife, meta: { title: 'Extra Life' } },
  ],
})

// Update document title on navigation
router.afterEach((to) => {
  const base = 'FifteenSun'
  document.title = to.meta?.title ? `${to.meta.title} — ${base}` : base
})

export default router

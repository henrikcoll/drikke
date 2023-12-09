import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PackSelectView from '../views/PackSelectView.vue'
import PlayerSelectView from '../views/PlayerSelectView.vue'
import PlayerView from '../views/PlayerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/packs',
      name: 'pack-select',
      component: PackSelectView
    },
    {
      path: '/players',
      name: 'player-select',
      component: PlayerSelectView
    },
    {
      path: '/play',
      name: 'player',
      component: PlayerView
    }
  ]
})

export default router

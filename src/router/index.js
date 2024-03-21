import { createRouter, createWebHistory } from 'vue-router'
import teamSettings from '../views/TeamSettingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TeamSettings',
      component: teamSettings,
    }
  ]
})

export default router

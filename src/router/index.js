import { createRouter, createWebHistory } from 'vue-router'
import Teams from '../views/TeamsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Teams',
      component: Teams,
    },
    {
      path:'/rankings',
      name:'Rankings',
      component : () => import ('@/views/RankingsView.vue')
    }

  ]
})






export default router

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
      path:'/ranked',
      name:'Ranked',
      component : () => import ('@/views/RankedView.vue')
    }

  ]
})






export default router

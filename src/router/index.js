import { createRouter, createWebHistory } from 'vue-router'
import Teams from '../views/TeamsView.vue'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

export default router

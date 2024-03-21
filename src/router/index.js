import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: {
        requiresAuth: false
      }
    }
  ]
})


export default router

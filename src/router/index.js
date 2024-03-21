import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogInView.vue'
//import SignUp from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
    },
    /* {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    } */
  ]
})

export default router
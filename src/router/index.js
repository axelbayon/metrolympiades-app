import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'
import TeamSettings from '../views/TeamSettingsView.vue'
import Rankings from '../views/RankingsView.vue'
import { supabase } from '@/supabase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :'/',
      name: 'TeamSettings',
      component: TeamSettings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/rankings',
      name: 'Rankings',
      component: Rankings,
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  
	const {data} = await supabase.auth.getSession()
	const isLogged = !!data.session //Si session est null, isLogged == false, sinon est true
	const requiresAuth = to.matched.some((value) => value.meta.requiresAuth)
	if (requiresAuth && !isLogged) {
		next('/login')
	} else if (!requiresAuth && isLogged) {
		next('/')
  }
  else {
    next()
	}
});

export default router
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/LogInView.vue'
import SignUp from '../views/SignUpView.vue'
import TeamSettings from '../views/TeamSettingsView.vue'
import Rankings from '../views/RankingsView.vue'
import { supabase } from '@/supabase'
import Matchs from '@/views/MatchsView.vue'
import CreateMatch from '@/views/CreateMatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path :'/',
      name: 'TeamSettings',
      component: TeamSettings,
      meta: {
        requiresAuth: true,
        title: 'Métrolympiade | Team Settings'
      }
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
      meta: {
        title: 'Métrolympiade | Log In'
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: {
        title: 'Métrolympiade | Sign Up'
      }
    },
    {
      path: '/rankings',
      name: 'Rankings',
      component: Rankings,
      meta: {
        title: 'Métrolympiade | Team Ranking'
      }
    },
    {
      path: '/matchs',
      name: 'Matchs',
      component: Matchs,
      meta: {
        title: 'Métrolympiade | Match History'
      }
    },
    {
      path: '/createMatch',
      name: 'CreateMatch',
      component: CreateMatch,
      meta: {
        requiresAuth: true,
        title: 'Métrolympiade | Match Creation'
    }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  
	const {data} = await supabase.auth.getSession()
	const isLogged = !!data.session //Si session est null, isLogged == false, sinon est true
	const requiresAuth = to.matched.some((value) => value.meta.requiresAuth)
	if (requiresAuth && !isLogged) {
		next('/login')
	}
  else {
    next()
	}
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router
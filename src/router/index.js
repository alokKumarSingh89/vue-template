import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Profile from '@/components/Profile'
import Alerts from '@/components/Alerts'
import Settings from '@/components/Settings'
import Messages from '@/components/Messages'
import Help from '@/components/Help'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import Landing from '@/components/Landing'
import Admin from '@/components/Admin'
import store from '../store'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  console.log('dd')
  if (store.state.userStore.user) {
    if (to.meta.adminRole) {
      if (store.state.userStore.user.role || store.state.userStore.user.email === 'admin@gmail.com') {
        next()
      } else {
        next(from.path)
      }
    } else {
      next()
    }
  } else {
    next('/')
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: Landing
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter: ifAuthenticated,
      meta: {
        adminRole: true
      }
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/page1',
      name: 'page1',
      component: Page1,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/page4',
      name: 'Page4',
      component: Page4,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/alerts',
      name: 'Alerts',
      component: Alerts,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})

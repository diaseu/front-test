import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: () => import(/* webpackChunkName: "AcctSettings" */ '../views/EditProfile.vue')
  },
  {
    path: '/EditSurvey',
    name: 'EditSurvey',
    component: () => import(/* webpackChunkName: "AcctSettings" */ '../views/EditSurvey.vue')
  },
  {
    path: '/acctsettings',
    name: 'AcctSettings',
    component: () => import(/* webpackChunkName: "AcctSettings" */ '../views/AcctSettings.vue')
  },
  {
    path: '/searchsettings',
    name: 'SearchSettings',
    component: () => import(/* webpackChunkName: "AcctSettings" */ '../views/SearchSettings.vue')
  },
  {
    path: '/match',
    name: 'Match',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Match.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

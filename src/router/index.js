import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store/index.js'
import BranchesView from '@/views/BranchesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sucursales',
      name: 'branches',
      component: BranchesView
    }
  ]
})

router.beforeEach(async (to, from) => {
  if (!store.getters.loggedIn && to.name !== 'login') {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router

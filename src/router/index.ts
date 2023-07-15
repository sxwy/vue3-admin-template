import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { useUserStore } from '@/store'
import { demoRoutes, loginRoutes, mainRoutes } from './modules'

const routes = [demoRoutes, loginRoutes, mainRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

const whiteList = ['/login/home']

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const userStore = useUserStore()
  if (userStore.current) {
    if (to.path === '/login/home') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login/home')
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { demoRoutes } from './modules'

const routes = [demoRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

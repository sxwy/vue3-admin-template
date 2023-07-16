import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { demoRoutes, loginRoutes, mainRoutes } from './modules'
import permission from './permission'

const routes = [demoRoutes, loginRoutes, mainRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

permission(router)

export default router

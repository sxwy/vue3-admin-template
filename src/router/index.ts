import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { loginRoutes, mainRoutes } from './modules'
import permission from './permission'

const routes = [loginRoutes, mainRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

permission(router)

export default router

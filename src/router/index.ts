import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { loginRoutes, mainRoutes } from './modules'
import guard from './guard'

const routes = [loginRoutes, mainRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

guard(router)

export default router

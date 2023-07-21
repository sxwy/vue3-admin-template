import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { basicsRoutes, mainRoutes } from './modules'
import guard from './guard'

const routes = [basicsRoutes, mainRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

guard(router)

export default router

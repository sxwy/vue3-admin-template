import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { basicsRoutes, dashboardRoutes } from './modules'
import guard from './guard'
export * from './modules'

const routes = [...basicsRoutes, dashboardRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

guard(router)

export default router

import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import {
  basicsRoutes,
  exceptionRoutes,
  loginRoutes,
  dashboardRoutes
} from './modules'
import guard from './guard'
export * from './modules'

const routes = [...basicsRoutes, exceptionRoutes, loginRoutes, dashboardRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

guard(router)

export default router

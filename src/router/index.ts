import { createRouter, createWebHistory } from 'vue-router'
import { BASE_SITE } from '@/constants'
import { basicsRoutes } from './modules'
import guard from './guard'

const routes = [...basicsRoutes]

const router = createRouter({
  history: createWebHistory(BASE_SITE),
  routes
})

guard(router)

export default router

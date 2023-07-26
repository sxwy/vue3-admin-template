import type { RouteRecordRaw } from 'vue-router'

/** 兜底路由 */
export const catchAllRoute = {
  path: '/:catchAll(.*)',
  redirect: '/exception/not-found/index'
}

/** 基础相关路由 */
export default [
  {
    path: '/',
    redirect: '/dashboard/console/index'
  }
] as RouteRecordRaw[]

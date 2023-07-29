import type { RouteRecordRaw } from 'vue-router'

/** 兜底路由 */
export const catchAllRoute = {
  name: 'CatchAll', // 需要加 name，不然退出登录时 remove 不了
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

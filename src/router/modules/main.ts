import { type RouteRecordRaw, RouterView } from 'vue-router'

/** 首页相关路由 */
export default {
  path: '/main',
  component: RouterView,
  children: [
    {
      // 首页
      path: '/main/home',
      alias: '/',
      meta: { title: '首页' },
      component: () => import('@/pages/main/home.vue')
    }
  ]
} as RouteRecordRaw

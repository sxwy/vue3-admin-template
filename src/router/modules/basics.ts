import { type RouteRecordRaw, RouterView } from 'vue-router'

/** 登录相关路由 */
export default {
  path: '/basics',
  component: RouterView,
  children: [
    {
      // 登录首页
      path: 'login/index',
      meta: { title: '登录首页' },
      component: () => import('@/pages/basics/login/index.vue')
    }
  ]
} as RouteRecordRaw

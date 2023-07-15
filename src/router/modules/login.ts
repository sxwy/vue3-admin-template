import { type RouteRecordRaw, RouterView } from 'vue-router'

/** 登录相关路由 */
export default {
  path: '/login',
  component: RouterView,
  children: [
    {
      // 登录首页
      path: 'home',
      meta: { title: '登录首页' },
      component: () => import('@/pages/login/home.vue')
    }
  ]
} as RouteRecordRaw

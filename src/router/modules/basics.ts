import { type RouteRecordRaw, RouterView } from 'vue-router'

/** 登录相关路由 */
export default {
  name: 'Basics',
  path: '/basics',
  component: RouterView,
  children: [
    {
      // 登录首页
      name: 'BasicsLoginIndex',
      path: 'login/index',
      meta: {
        menuAuth: true,
        menuShow: false,
        menuTitle: '登录首页',
        menuIcon: '',
        buttonAuth: []
      },
      component: () => import('@/pages/basics/login/index.vue')
    },
    {
      // 404
      name: '404',
      path: '/:catchAll(.*)',
      meta: {
        menuAuth: true,
        menuShow: false,
        menuTitle: '缺省页',
        menuIcon: '',
        buttonAuth: []
      },
      component: () => import('@/pages/basics/404.vue')
    }
  ]
} as RouteRecordRaw

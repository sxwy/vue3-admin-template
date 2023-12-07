import type { RouteRecordRaw } from 'vue-router'

/** 登录相关路由 */
export default {
  name: 'Login',
  path: '/login',
  redirect: '/login/index',
  meta: {
    title: 'Login',
    menuShow: false,
    menuIcon: '',
    buttons: []
  },
  children: [
    {
      name: 'LoginIndex',
      path: 'index',
      component: () => import('@/pages/login/index.vue'),
      meta: {
        title: 'LoginIndex',
        menuShow: false,
        menuIcon: '',
        buttons: []
      }
    }
  ]
} as RouteRecordRaw

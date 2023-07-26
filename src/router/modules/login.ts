import type { RouteRecordRaw } from 'vue-router'

/** 登录相关路由 */
export default {
  name: 'LoginIndex',
  path: '/login/index',
  meta: {
    title: '登录',
    menuShow: false,
    menuIcon: '',
    routePermission: true,
    buttonPermission: []
  },
  component: () => import('@/pages/login/index.vue')
} as RouteRecordRaw

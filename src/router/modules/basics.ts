import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

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
  },
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      menuShow: false,
      menuIcon: '',
      routePermission: true,
      buttonPermission: []
    },
    component: () => import('@/pages/basics/login/index.vue')
  },
  {
    name: 'Exception',
    path: '/exception',
    redirect: '/exception/not-found/index',
    component: Layout,
    meta: {
      title: '异常页面',
      menuShow: false,
      menuIcon: '',
      routePermission: true,
      buttonPermission: []
    },
    children: [
      {
        name: 'ExceptionNotFound',
        path: 'not-found/index',
        component: () => import('@/pages/basics/exception/not-found/index.vue'),
        meta: {
          title: '缺省页',
          menuShow: false,
          menuIcon: '',
          routePermission: true,
          buttonPermission: []
        }
      }
    ]
  }
] as RouteRecordRaw[]

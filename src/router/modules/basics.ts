import { type RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

/** 基础相关路由 */
export default [
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
    path: '/',
    redirect: '/main',
    component: Layout,
    children: [
      {
        name: 'Main',
        path: 'main',
        component: () => import('@/pages/basics/main/index.vue'),
        meta: {
          title: '首页',
          menuShow: true,
          menuIcon: '',
          routePermission: true,
          buttonPermission: []
        }
      },
      {
        name: '404',
        path: '404',
        meta: {
          title: '404',
          menuShow: false,
          menuIcon: '',
          routePermission: true,
          buttonPermission: []
        },
        component: () => import('@/pages/basics/404/index.vue')
      },
      {
        name: '403',
        path: '403',
        meta: {
          title: '403',
          menuShow: false,
          menuIcon: '',
          routePermission: true,
          buttonPermission: []
        },
        component: () => import('@/pages/basics/403/index.vue')
      }
    ]
  }
] as RouteRecordRaw[]

import { type RouteRecordRaw } from 'vue-router'
import CLayout from '@/components/c-layout/index.vue'

/** 基础相关路由 */
export default [
  {
    name: 'Login',
    path: '/login',
    meta: {
      menuAuth: true,
      menuShow: false,
      menuTitle: '登录',
      menuIcon: '',
      buttonAuth: []
    },
    component: () => import('@/pages/basics/login/index.vue')
  },
  {
    path: '/',
    redirect: '/main',
    component: CLayout,
    children: [
      {
        name: 'Main',
        path: '/main',
        component: () => import('@/pages/basics/main/index.vue'),
        meta: {
          menuAuth: true,
          menuShow: true,
          menuTitle: '首页',
          menuIcon: '',
          buttonAuth: []
        }
      },
      {
        name: '404',
        path: '/404',
        meta: {
          menuAuth: true,
          menuShow: false,
          menuTitle: '404',
          menuIcon: '',
          buttonAuth: []
        },
        component: () => import('@/pages/basics/404/index.vue')
      },
      {
        name: '403',
        path: '/403',
        meta: {
          menuAuth: true,
          menuShow: false,
          menuTitle: '403',
          menuIcon: '',
          buttonAuth: []
        },
        component: () => import('@/pages/basics/403/index.vue')
      }
    ]
  }
] as RouteRecordRaw[]

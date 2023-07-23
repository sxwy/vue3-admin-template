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
      menuTitle: '登录首页',
      menuIcon: '',
      buttonAuth: []
    },
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/',
    redirect: '/main',
    component: CLayout,
    children: [
      {
        name: 'Main',
        path: '/main',
        component: () => import('@/pages/main/index.vue'),
        meta: {
          menuAuth: true,
          menuShow: true,
          menuTitle: '首页',
          menuIcon: '',
          buttonAuth: []
        }
      },
      {
        name: 'NotFound',
        path: '/not-found',
        meta: {
          menuAuth: true,
          menuShow: false,
          menuTitle: '缺省页',
          menuIcon: '',
          buttonAuth: []
        },
        component: () => import('@/pages/not-found/index.vue')
      },
      {
        name: 'Forbidden',
        path: '/forbidden',
        meta: {
          menuAuth: true,
          menuShow: false,
          menuTitle: '无权限',
          menuIcon: '',
          buttonAuth: []
        },
        component: () => import('@/pages/forbidden/index.vue')
      }
    ]
  }
] as RouteRecordRaw[]

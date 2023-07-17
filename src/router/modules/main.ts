import { type RouteRecordRaw } from 'vue-router'
import CLayout from '@/components/c-layout/index.vue'

/** 首页相关路由 */
export default {
  path: '/main',
  component: CLayout,
  children: [
    {
      // 首页
      alias: '/',
      path: '/main/home',
      meta: { title: '首页' },
      component: () => import('@/pages/main/home.vue')
    }
  ]
} as RouteRecordRaw

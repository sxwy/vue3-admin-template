import { type RouteRecordRaw } from 'vue-router'
import CLayout from '@/components/c-layout/index.vue'

/** 首页相关路由 */
export default {
  path: '/',
  redirect: '/main/index',
  component: CLayout,
  children: [
    {
      // 首页
      path: '/main/index',
      meta: { title: '首页' },
      component: () => import('@/pages/main/index.vue')
    }
  ]
} as RouteRecordRaw

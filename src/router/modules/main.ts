import { type RouteRecordRaw } from 'vue-router'
import CLayout from '@/components/c-layout/index.vue'

/** 首页相关路由 */
export default {
  name: 'Main',
  path: '/',
  redirect: '/main/index',
  component: CLayout,
  children: [
    {
      // 首页
      name: 'MainIndex',
      path: '/main/index',
      meta: {
        menuAuth: true,
        menuShow: false,
        menuTitle: '首页',
        menuIcon: '',
        buttonAuth: []
      },
      component: () => import('@/pages/main/index.vue')
    }
  ]
} as RouteRecordRaw

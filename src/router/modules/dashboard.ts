import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

/** 仪表盘相关路由 */
export default {
  name: 'Dashboard',
  path: '/dashboard',
  redirect: '/dashboard/console/index',
  component: Layout,
  meta: {
    title: '仪表盘',
    menuShow: true,
    menuIcon: 'Odometer',
    buttons: []
  },
  children: [
    {
      name: 'DashboardConsoleIndex',
      path: 'console/index',
      component: () => import('@/pages/dashboard/console/index.vue'),
      meta: {
        title: '控制台',
        menuShow: true,
        menuIcon: 'Cpu',
        buttons: []
      }
    },
    {
      name: 'DashboardWorkbenchIndex',
      path: 'workbench/index',
      component: () => import('@/pages/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        menuShow: true,
        menuIcon: 'Mouse',
        buttons: []
      }
    }
  ]
} as RouteRecordRaw

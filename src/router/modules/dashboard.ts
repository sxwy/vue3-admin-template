import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

/** 控制面板相关路由 */
export default {
  name: 'Dashboard',
  path: '/dashboard',
  redirect: '/dashboard/console/index',
  component: Layout,
  meta: {
    title: '控制面板',
    menuShow: true,
    menuIcon: '',
    routePermission: true,
    buttonPermission: []
  },
  children: [
    {
      name: 'DashboardConsole',
      path: 'console/index',
      component: () => import('@/pages/dashboard/console/index.vue'),
      meta: {
        title: '控制台',
        menuShow: true,
        menuIcon: '',
        routePermission: true,
        buttonPermission: []
      }
    },
    {
      name: 'DashboardWorkbench',
      path: 'workbench/index',
      component: () => import('@/pages/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        menuShow: true,
        menuIcon: '',
        routePermission: true,
        buttonPermission: []
      }
    }
  ]
} as RouteRecordRaw

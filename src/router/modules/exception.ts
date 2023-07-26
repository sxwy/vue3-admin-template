import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/Layout/index.vue'

/** 异常相关路由 */
export default {
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
      name: 'ExceptionNotFoundIndex',
      path: 'not-found/index',
      component: () => import('@/pages/exception/not-found/index.vue'),
      meta: {
        title: '缺省页',
        menuShow: false,
        menuIcon: '',
        routePermission: true,
        buttonPermission: []
      }
    }
  ]
} as RouteRecordRaw

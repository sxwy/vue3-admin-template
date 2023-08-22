import type { RouteRecordRaw } from 'vue-router'

/** 异常相关路由 */
export default {
  name: 'Exception',
  path: '/exception',
  redirect: '/exception/not-found/index',
  meta: {
    title: 'Exception',
    menuShow: false,
    menuIcon: '',
    buttons: []
  },
  children: [
    {
      name: 'ExceptionNotFoundIndex',
      path: 'not-found/index',
      component: () => import('@/pages/exception/not-found/index.vue'),
      meta: {
        title: 'ExceptionNotFoundIndex',
        menuShow: false,
        menuIcon: '',
        buttons: []
      }
    }
  ]
} as RouteRecordRaw

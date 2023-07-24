import type { Router } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import { APP_NAME } from '@/constants'

const whiteList = ['/login']

export default (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title || APP_NAME
    const user = useUserStore()
    if (user.session) {
      if (to.path === '/login') {
        next('/')
      } else {
        if (user.current) {
          const routes = router.getRoutes()
          const findResult = routes.find((item) => item.path === to.path)
          if (findResult) {
            if (to.meta.routePermission) {
              next()
            } else {
              next('/403')
            }
          } else {
            next('/404')
          }
        } else {
          try {
            await user.userInit()
            const routes = router.getRoutes()
            const findResult = routes.find((item) => item.path === to.path)
            if (findResult) {
              if (to.meta.routePermission) {
                next({ ...to, replace: true })
              } else {
                next('/403')
              }
            } else {
              next('/404')
            }
          } catch (error: any) {
            ElMessage({
              type: 'error',
              message: error.message || '获取用户信息失败，请重新登录'
            })
            next('/login')
          }
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login')
      }
    }
  })
}

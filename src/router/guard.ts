import type { Router } from 'vue-router'
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
          if (to.meta.routePermission) {
            next()
          } else {
            next('/403')
          }
        } else {
          await user.userInit()
          if (to.meta.routePermission) {
            next({ ...to, replace: true })
          } else {
            next('/403')
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

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
          next()
        } else {
          try {
            await user.userInit()
            next({ ...to, replace: true })
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

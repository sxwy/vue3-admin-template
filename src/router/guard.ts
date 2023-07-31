import type { Router } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import i18n from '@/i18n'
import { APP_NAME } from '@/constants'

const whiteList = ['/login/index']

export default (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title
      ? i18n.global.t(`route.${to.meta.title}`)
      : APP_NAME
    const user = useUserStore()
    if (user.session) {
      if (to.path === '/login/index') {
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
            next('/login/index')
          }
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login/index')
      }
    }
  })
}

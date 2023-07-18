import type { Router } from 'vue-router'
import { useUserStore } from '@/store'

const whiteList = ['/login/home']

export default (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title
    const user = useUserStore()
    if (user.session) {
      if (to.path === '/login/home') {
        next('/')
      } else {
        if (!user.current) {
          await user.userInit()
        }
        next()
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login/home')
      }
    }
  })
}

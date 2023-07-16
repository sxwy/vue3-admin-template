import type { Router } from 'vue-router'
import { useUserStore } from '@/store'

const whiteList = ['/login/home']

export default (router: Router) => {
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    const userStore = useUserStore()
    if (userStore.session) {
      if (to.path === '/login/home') {
        next('/')
      } else {
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

import type { Router } from 'vue-router'
import { useUserStore } from '@/store'

const whiteList = ['/login/home']

/**
 * 1、403 或 404 等异常页面放在 layout 组件路由中
 * ——1.1、菜单不会高亮
 *
 * 2、后端路由表全部返回，根据某个字段来区分是否有权限，这样就可以根据这个字段来展示对应页面或 403 页面
 * ——2.1、这样在跳转之前就要进行判断，有权限则进入，无权限则展示 403
 * ——2.2、如果不在路由表中则展示 404，这个 404 就是自己判断的，而不是 router 匹配出来的
 * ——2.3、如果都没有权限则停留在登录页面
 */

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

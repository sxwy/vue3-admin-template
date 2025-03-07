import { defineStore } from 'pinia'
import type { RouteRecordRaw, RouteComponent } from 'vue-router'
import router, { catchAllRoute } from '@/router'
import { login, getUserInfo, refreshToken } from '@/services'
import type { LoginQuery, Session, User, Route } from '@/types'
import { resolveComponent } from '@/utils'
import Layout from '@/components/Layout/index.vue'

/**
 * 生成需要的路由结构
 * @param routes 路由信息
 * @returns 返回处理后的路由信息
 */
const generateRoutes = (routes: Route[]): Route[] => {
  routes.forEach((item) => {
    // 这里主要就是往 component 属性上赋值具体的组件信息
    // 这边不需要合并 path，和菜单那里的生成逻辑不一样
    if (item.component === 'Layout') {
      ;(item.component as unknown as RouteComponent) = Layout
    } else {
      ;(item.component as unknown as RouteComponent) = resolveComponent(
        item.component
      )
    }
    if (item.children.length) {
      item.children = generateRoutes(item.children)
    }
  })
  routes.push(catchAllRoute as Route) // 追加 404 路由
  return routes
}

/**
 * 重置路由表
 * @param routes 路由信息
 */
const resetRoutes = (routes: Route[]) => {
  routes.forEach((item) => {
    router.removeRoute(item.name)
  })
}

interface UserState {
  session: Session | null
  current: User | null
}

export const useUserStore = defineStore('user', {
  persist: {
    paths: ['session']
  },
  state(): UserState {
    return {
      session: null,
      current: null
    }
  },
  actions: {
    /**
     * 登录初始化
     * @param payload 参数
     */
    async loginInit(payload: LoginQuery) {
      const result = await login(payload)
      this.session = result
    },
    /**
     * 更新会话信息
     */
    async updateSession() {
      const result = await refreshToken()
      this.session = result
    },
    /**
     * 获取用户信息
     */
    async userInit() {
      const result = await getUserInfo()
      result.routes = generateRoutes(result.routes)
      result.routes.forEach((item) => {
        router.addRoute(item as unknown as RouteRecordRaw)
      })
      this.current = result
    },
    /**
     * 退出登录
     */
    logout() {
      resetRoutes(this.current!.routes)
      this.session = null
      this.current = null
    }
  }
})

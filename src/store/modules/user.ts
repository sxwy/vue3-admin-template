import { defineStore } from 'pinia'
import router from '@/router'
import { useRouter, type RouteRecordRaw } from 'vue-router'
import CLayout from '@/components/c-layout/index.vue'
import { login, getUserInfo, refreshToken } from '@/services'
import type { LoginQuery, Session, User } from '@/types'

export interface UserState {
  session: Session | null
  current: User | null
}

const filterRoutes = (routes: User['routes']): User['routes'] => {
  routes.forEach((item) => {
    if (item.components === 'Layout') {
      item.components = CLayout as any
    } else {
      item.components = (() =>
        import(/* @vite-ignore */ '@/pages' + item.components + '.vue')) as any
    }
    if (item.children && item.children.length) {
      item.children = filterRoutes(item.children)
    }
  })
  return routes
}

export const useUserStore = defineStore('user', {
  persist: {
    storage: localStorage,
    paths: ['session']
  },
  state(): UserState {
    return {
      session: null,
      current: null
    }
  },
  actions: {
    /** 登录初始化 */
    async loginInit(payload: LoginQuery) {
      const result = await login(payload)
      this.session = result
    },
    /** 更新会话信息 */
    async updateSession() {
      const result = await refreshToken()
      this.session = result
    },
    /** 获取用户信息 */
    async userInit() {
      const result = await getUserInfo()
      result.routes = filterRoutes(result.routes)
      this.current = result
      console.log(
        '%c result==========>',
        'color: #4FC08D; font-weight: bold',
        result
      )
      router.addRoute(result.routes as unknown as RouteRecordRaw)
      console.log(
        '%c 111==========>',
        'color: #4FC08D; font-weight: bold',
        router.getRoutes()
      )
    },
    /** 退出登录 */
    logout() {
      this.session = null
      this.current = null
    }
  }
})

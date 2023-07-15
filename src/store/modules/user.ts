import { defineStore } from 'pinia'
import { login } from '@/services'
import type { LoginQuery } from '@/types'

interface Current extends LoginQuery {
  token: string
}

export interface UserState {
  current: Current | null
}

export const useUserStore = defineStore('user', {
  persist: {
    storage: localStorage
  },
  state(): UserState {
    return {
      current: null
    }
  },
  actions: {
    /** 登录初始化 */
    async loginInit(payload: LoginQuery) {
      const result = await login(payload)
      this.current = result
    }
  }
})

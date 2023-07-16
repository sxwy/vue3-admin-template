import { defineStore } from 'pinia'
import { login } from '@/services'
import type { LoginQuery } from '@/types'

interface Session {
  token: string
}

export interface UserState {
  session: Session | null
}

export const useUserStore = defineStore('user', {
  persist: {
    storage: localStorage
  },
  state(): UserState {
    return {
      session: null
    }
  },
  actions: {
    /** 登录初始化 */
    async loginInit(payload: LoginQuery) {
      const result = await login(payload)
      this.session = result
    }
  }
})

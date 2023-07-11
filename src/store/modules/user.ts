import { defineStore } from 'pinia'

export interface UserState {
  current: any
}

export const useUserStore = defineStore('user', {
  state(): UserState {
    return {
      current: null
    }
  },
  actions: {
    getUserInfo() {
      this.current = {}
    }
  }
})

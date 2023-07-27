import { defineStore } from 'pinia'

interface AppState {
  /** 侧边栏是否折叠 */
  sidebarCollapse: boolean
}

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      sidebarCollapse: false
    }
  },
  actions: {
    /** 切换侧边栏折叠状态 */
    toggleSidebarCollapse() {
      this.sidebarCollapse = !this.sidebarCollapse
    }
  }
})

import { defineStore } from 'pinia'

interface AppState {
  /**
   * 侧边栏折叠状态
   * - open 打开
   * - close 关闭
   */
  sidebarCollapseState: 'open' | 'close'
}

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      sidebarCollapseState: 'open'
    }
  },
  actions: {
    /** 切换侧边栏折叠状态 */
    toggleSidebarCollapseState() {
      this.sidebarCollapseState =
        this.sidebarCollapseState === 'open' ? 'close' : 'open'
    }
  }
})

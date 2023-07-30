import { defineStore } from 'pinia'
import { zhCn } from '@/i18n'

interface AppState {
  /** 侧边栏是否折叠 */
  isSidebarCollapse: boolean
  /** 当前语言 */
  localeLang: string
}

/** 默认语言 */
export const defaultLocaleLang = zhCn

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      isSidebarCollapse: false,
      localeLang: defaultLocaleLang
    }
  },
  actions: {
    /** 切换侧边栏折叠状态 */
    toggleSidebarCollapse() {
      this.isSidebarCollapse = !this.isSidebarCollapse
    },
    /** 设置语言包 */
    setlLcaleLang(localeLang: string) {
      this.localeLang = localeLang
    }
  }
})

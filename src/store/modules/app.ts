import { defineStore } from 'pinia'
import { zhCn } from '@/i18n'
import { defaultThemePrimaryColor } from '@/constants'

interface AppState {
  /** 侧边栏是否折叠 */
  isSidebarCollapse: boolean
  /** 当前语言 */
  localeLang: string
  /** 当前主题颜色 */
  themePrimaryColor: string
}

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      isSidebarCollapse: false,
      localeLang: zhCn,
      themePrimaryColor: defaultThemePrimaryColor
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
    },
    /** 设置主题颜色 */
    setlThemePrimaryColor(color: string) {
      this.themePrimaryColor = color
    }
  }
})

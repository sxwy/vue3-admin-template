import { defineStore } from 'pinia'
import { zhCn } from '@/i18n'
import { defaultThemePrimaryColor } from '@/constants'

export interface TagsViewItem {
  title: string
  path: string
}

interface AppState {
  /** 侧边栏是否折叠 */
  isSidebarCollapse: boolean
  /** 当前语言 */
  localeLang: string
  /** 当前主题颜色 */
  themePrimaryColor: string
  /** 标签列表 */
  tagsViewList: TagsViewItem[]
}

export const useAppStore = defineStore('app', {
  state(): AppState {
    return {
      isSidebarCollapse: false,
      localeLang: zhCn,
      themePrimaryColor: defaultThemePrimaryColor,
      tagsViewList: []
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
    },
    /** 添加标签 */
    addTagsView(tagsView: TagsViewItem) {
      const ifFind = this.tagsViewList.find(
        (item) => item.path === tagsView.path
      )
      if (!ifFind) {
        this.tagsViewList.push(tagsView)
      }
    },
    /** 删除标签 */
    removeTagsView(index: number) {
      this.tagsViewList.splice(index, 1)
    }
  }
})

import { defineStore } from 'pinia'
import { zhCn } from '@/i18n'
import { defaultThemePrimaryColor } from '@/constants'

export interface TagsViewItem {
  name: string
  title: string
  fullPath: string
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
      isSidebarCollapse: true,
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
    /** 更新标签 */
    updateTagsView(tagsView: TagsViewItem) {
      const index = this.tagsViewList.findIndex(
        (item) => item.name === tagsView.name
      )
      if (index === -1) {
        this.tagsViewList.push(tagsView)
      } else {
        this.tagsViewList[index] = tagsView
      }
    },
    /** 删除标签 */
    removeTagsView(index: number) {
      this.tagsViewList.splice(index, 1)
    },
    /** 清除右侧标签 */
    clearRightTagsView(index: number) {
      this.tagsViewList.splice(
        index + 1,
        this.tagsViewList.length - (index + 1)
      )
    },
    /** 清除其他标签 */
    clearOtherTagsView(index: number) {
      this.tagsViewList.splice(
        index + 1,
        this.tagsViewList.length - (index + 1)
      )
      this.tagsViewList.splice(0, index)
    }
  }
})

import { defineStore } from 'pinia'
import { type RouteLocationNormalizedLoaded } from 'vue-router'
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
  tagsViewList: RouteLocationNormalizedLoaded[]
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
    /**
     * 切换侧边栏折叠状态
     */
    toggleSidebarCollapse() {
      this.isSidebarCollapse = !this.isSidebarCollapse
    },
    /**
     * 设置语言包
     * @param localeLang 当前选择的语言
     */
    setlLcaleLang(localeLang: string) {
      this.localeLang = localeLang
    },
    /**
     * 设置主题颜色
     *  @param color 当前选择的颜色
     */
    setlThemePrimaryColor(color: string) {
      this.themePrimaryColor = color
    },
    /**
     * 更新标签
     * @param tagsView 更新的内容
     */
    updateTagsView(tagsView: RouteLocationNormalizedLoaded) {
      const index = this.tagsViewList.findIndex(
        (item) => item.name === tagsView.name
      )
      if (index === -1) {
        this.tagsViewList.push(tagsView)
      } else {
        this.tagsViewList[index] = tagsView
      }
    },
    /**
     * 删除标签
     * @param index 当前点击的下标
     */
    removeTagsView(index: number) {
      this.tagsViewList.splice(index, 1)
    },
    /**
     * 清除右侧标签
     * @param index 当前点击的下标
     */
    clearRightTagsView(index: number) {
      this.tagsViewList.splice(
        index + 1,
        this.tagsViewList.length - (index + 1)
      )
    },
    /**
     * 清除其他标签
     * @param index 当前点击的下标
     */
    clearOtherTagsView(index: number) {
      this.tagsViewList.splice(
        index + 1,
        this.tagsViewList.length - (index + 1)
      )
      this.tagsViewList.splice(0, index)
    }
  }
})

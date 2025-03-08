import { defineStore } from 'pinia'
import { zhCn } from '@/i18n'
import { defaultThemePrimaryColor } from '@/constants'
import type { Meta } from '@/types'

export interface TagsView {
  /** 路由名称 */
  name: string
  /** 路由完整路径 */
  fullPath: string
  /** 路由元数据 */
  meta: Meta
}

interface AppState {
  /** 侧边栏是否折叠 */
  isSidebarCollapse: boolean
  /** 当前语言 */
  localeLang: string
  /** 当前主题颜色 */
  themePrimaryColor: string
  /** 标签列表 */
  tagsViewList: TagsView[]
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
    updateTagsView(tagsView: TagsView) {
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
      this.clearRightTagsView(index)
      this.tagsViewList.splice(0, index)
    }
  }
})

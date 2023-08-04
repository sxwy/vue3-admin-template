import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import i18n from '@/i18n'

/** 生成 Fuse 搜索数据 */
export const generateFuseData = (
  routes: RouteRecordRaw[] | RouteRecordNormalized[]
) => {
  const result: {
    title: string
    path: string
  }[] = []
  routes.forEach((item) => {
    result.push({
      title: i18n.global.t(`common.routes.${item.meta!.title}`),
      path: item.path
    })
    // 递归处理子集
    if (item.children?.length) {
      result.push(...generateFuseData(item.children))
    }
  })
  return result
}

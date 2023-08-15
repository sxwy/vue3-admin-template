import { baseApi } from '@/api'
import type { RoleItem } from './type'

/** 获取角色列表 */
export const getRoleList = async () => {
  const result = await baseApi.request<{
    totalCount: number
    list: RoleItem[]
  }>({
    method: 'POST',
    url: '/api/getRoleList/v1.0'
  })
  result.list.forEach((item) => {
    if (item.state === 0) {
      item.stateStr = '禁用'
    } else if (item.state === 1) {
      item.stateStr = '正常'
    }
  })
  return result
}

import { baseApi } from '@/api'
import type { RoleItem } from './type'

/** 获取角色列表 */
export const getRoleList = async (data: {
  name?: string
  state?: number
  pageNo?: number
  pageSize?: number
}) => {
  const result = await baseApi.request<{
    totalNum: number
    list: RoleItem[]
  }>({
    method: 'POST',
    url: '/api/getRoleList/v1.0',
    data
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

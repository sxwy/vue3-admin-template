import { baseApi } from '@/api'

/** 获取角色列表 */
export const getRoleList = () => {
  return baseApi.request({
    method: 'POST',
    url: '/api/getRoleList/v1.0'
  })
}

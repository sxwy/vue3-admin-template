import { baseApi } from '@/api'

/**
 * 提交登录信息
 */
export const submitLoginInfo = (data: {
  account: string
  password: string
}) => {
  return baseApi.request({
    method: 'POST',
    url: '/server/login/v1.0',
    data
  })
}

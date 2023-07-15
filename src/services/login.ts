import { baseApi } from '@/api'
import type { LoginQuery } from '@/types'

/** 登录 */
export const login = (data: LoginQuery) => {
  return baseApi.request({
    method: 'POST',
    url: '/api/login/v1.0',
    data
  })
}

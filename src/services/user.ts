import { baseApi } from '@/api'
import type { LoginQuery, Session, User } from '@/types'

/** 登录 */
export const login = (data: LoginQuery) => {
  return baseApi.request<Session>({
    method: 'POST',
    url: '/api/login/v1.0',
    data
  })
}

/** 获取用户信息 */
export const getUserInfo = () => {
  return baseApi.request<User>({
    method: 'POST',
    url: '/api/user/v1.0'
  })
}

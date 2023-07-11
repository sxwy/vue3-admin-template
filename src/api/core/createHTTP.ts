import axios from 'axios'
import { useUserStore } from '@/store'
import { createError, defaultErrorCode, defaultErrorMessage } from './error'

export default (requestConfig = {}) => {
  const request = axios.create(requestConfig)

  request.interceptors.request.use(
    (config) => {
      const user = useUserStore()
      if (user.current?.userToken) {
        config.headers.set('Authorization', `Bearer ${user.current.userToken}`)
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  request.interceptors.response.use(
    (response) => {
      if (response.data !== null && typeof response.data === 'object') {
        const code = String(
          response.data.returncode || response.data.code || ''
        )
        if (code) {
          if (code === '10000') {
            return response.data.body
          } else {
            return Promise.reject(
              createError(
                code,
                response.data.message ||
                  response.data.msg ||
                  defaultErrorMessage.ERROR,
                response.config,
                response
              )
            )
          }
        } else {
          const flag = response.data.flag
          if (flag) {
            return response.data.data
          } else {
            return Promise.reject(
              createError(
                defaultErrorCode.ERROR,
                response.data.message ||
                  response.data.msg ||
                  defaultErrorMessage.ERROR,
                response.config,
                response
              )
            )
          }
        }
      } else {
        return Promise.reject(
          createError(
            defaultErrorCode.ERROR,
            defaultErrorMessage.ERROR,
            response.config,
            response
          )
        )
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return request
}

import axios from 'axios'
import { useUserStore } from '@/store'
import {
  createRequestError,
  defaultErrorCode,
  defaultErrorMessage
} from './error'

export default (requestConfig = {}) => {
  const request = axios.create(requestConfig)

  request.interceptors.request.use(
    (config) => {
      const user = useUserStore()
      if (user.current?.token && !config.headers.Authorization) {
        config.headers.set('Authorization', `Bearer ${user.current.token}`)
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  request.interceptors.response.use(
    (response) => {
      if (Object.prototype.toString.call(response.data) === '[object Object]') {
        const keys = Reflect.ownKeys(response.data)
        if (keys.includes('code') || keys.includes('returncode')) {
          const code = String(response.data.code || response.data.returncode)
          if (code === '10000') {
            return response.data.body
          } else {
            return Promise.reject(
              createRequestError(
                code,
                response.data.message,
                response.config,
                response
              )
            )
          }
        } else if (keys.includes('flag')) {
          const flag = response.data.flag
          if (flag) {
            return response.data.data
          } else {
            return Promise.reject(
              createRequestError(
                defaultErrorCode,
                response.data.msg,
                response.config,
                response
              )
            )
          }
        } else {
          return Promise.reject(
            createRequestError(
              defaultErrorCode,
              defaultErrorMessage,
              response.config,
              response
            )
          )
        }
      } else {
        return Promise.reject(
          createRequestError(
            defaultErrorCode,
            defaultErrorMessage,
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

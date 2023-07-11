import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

export class RequestError extends Error {
  constructor(
    public code: string,
    public message: string,
    public config?: AxiosRequestConfig,
    public response?: AxiosResponse
  ) {
    super(message)
    this.code = code
    this.message = message
    this.config = config
    this.response = response
  }
}

export const createRequestError = (
  code: string,
  message: string,
  config?: AxiosRequestConfig,
  response?: AxiosResponse
) => {
  return new RequestError(code, message, config, response)
}

/** 默认的错误码配置 */
export const defaultErrorCode = 'error'

/** 默认的错误信息配置 */
export const defaultErrorMessage = '服务异常'

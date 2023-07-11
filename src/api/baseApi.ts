import { createRequest } from './core'
import { BASE_API } from '@/constants'

const baseApi = createRequest({
  baseURL: BASE_API,
  header: { 'Content-Type': 'application/json' }
})

export default baseApi

import { baseApi } from '@/api'
import { type ConfigInfo } from './type'

/**
 * 获取配置信息
 * @see http://api.xxx.cn:5000/project/178/interface/api/114157
 */
export const getConfigInfo = (data: { schoolId: string; gradeId: string }) => {
  return baseApi.request<ConfigInfo>({
    method: 'GET',
    url: '/feServer/enroll/intro/v1.0',
    params: data
  })
}

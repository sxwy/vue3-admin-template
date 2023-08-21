import { onMounted } from 'vue'

/** 参数 */
interface Options {
  /** 表单 */
  form: object
  /** 分页 */
  paging: {
    /** 页码 */
    pageNo: number
    /** 页数 */
    pageSize: number
    /** 总条数 */
    totalNum: number
  }
  request: (arg: any) => Promise<any>
}

/**
 * 请求时缓存搜索和分页参数到路由中
 * 页面挂载时从路由中获取对应的参数
 */
const setCache = () => {
  console.log('%c set cache==========>', 'color: #4FC08D; font-weight: bold')
}

const getCache = () => {
  console.log('%c get cache==========>', 'color: #4FC08D; font-weight: bold')
}

export const useTable = (options: Options) => {
  onMounted(() => {
    getCache()
  })

  const getList = () => {
    setCache()
    return options.request({})
  }

  return {
    getList
  }
}

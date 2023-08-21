import { reactive, computed, onMounted, toRefs } from 'vue'

/** 参数 */
interface Options {
  /** 表单 */
  form: object
  request: (arg: any) => Promise<any>
}

interface State {
  /** 分页 */
  paging: {
    /** 页码 */
    pageNo: number
    /** 页数 */
    pageSize: number
    /** 总条数 */
    totalNum: number
  }
  /** 表格 */
  table: {
    /** 列表 */
    list: any[]
    /** loading 是否展示 */
    loading: boolean
  }
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
  const state: State = reactive({
    table: {
      list: [],
      loading: false
    },
    paging: {
      pageNo: 1,
      pageSize: 10,
      totalNum: 0
    }
  })

  const query = computed(() => {
    return {
      ...options.form,
      pageNo: state.paging.pageNo,
      pageSize: state.paging.pageSize
    }
  })

  onMounted(() => {
    getCache()
  })

  const getList = async () => {
    try {
      setCache()
      state.table.loading = true
      const result = await options.request(query)
      state.table.list = result.list
      state.paging.totalNum = result.totalNum
      return result
    } finally {
      state.table.loading = false
    }
  }

  return {
    ...toRefs(state),
    getList
  }
}

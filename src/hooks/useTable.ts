import { reactive, toRefs } from 'vue'

/** 表格 */
interface Table<T> {
  /** 列表 */
  list: T[]
  /** loading 是否展示 */
  loading: boolean
}

/** 分页 */
interface Paging {
  /** 页码 */
  pageNo: number
  /** 页数 */
  pageSize: number
  /** 总条数 */
  totalNum: number
}

/** 状态 */
interface State<T> {
  table: Table<T>
  paging: Paging
}

/** 参数 */
interface Options<T> {
  request: (options: { paging: Paging }) => Promise<
    | {
        list: T[]
        totalNum: number
      }
    | undefined
  >
}

export const useTable = <T>(options: Options<T>) => {
  const { request } = options

  const state: State<T> = reactive({
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

  const handleGetTableList = async () => {
    try {
      state.table.loading = true
      const result = await request({
        paging: state.paging
      })
      state.table.list = result?.list ?? []
      state.paging.totalNum = result?.totalNum ?? 0
    } finally {
      state.table.loading = false
    }
  }

  const handlePagingReset = () => {
    state.paging.pageNo = 1
    state.paging.pageSize = 10
  }

  const handlePagingPageSizeChange = (pageSize: number) => {
    state.paging.pageNo = 1
    state.paging.pageSize = pageSize
    handleGetTableList()
  }

  const handlePagingPageCurrentChange = (pageNo: number) => {
    state.paging.pageNo = pageNo
    handleGetTableList()
  }

  return {
    ...toRefs(state),
    handleGetTableList,
    handlePagingReset,
    handlePagingPageSizeChange,
    handlePagingPageCurrentChange
  }
}

import { reactive, toRefs, onMounted, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/** 表格 */
interface Table<T> {
  /** 列表数据 */
  list: T[]
  /** 加载 loading */
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
  form: Ref<object>
  request: (options: { paging: Paging }) => Promise<
    | {
        list: T[]
        totalNum: number
      }
    | undefined
  >
}

/** 默认的页码 */
const defaultPageNo = 1

/** 默认的页数 */
const defaultPageSize = 10

export const useTable = <T>(options: Options<T>) => {
  const { form, request } = options

  const state: State<T> = reactive({
    table: {
      list: [],
      loading: false
    },
    paging: {
      pageNo: defaultPageNo,
      pageSize: defaultPageSize,
      totalNum: 0
    }
  })

  const route = useRoute()
  const router = useRouter()

  /**
   * 设置参数
   */
  const handleSetQuery = () => {
    router.replace({
      query: {
        ...route.query,
        form: JSON.stringify(form),
        paging: JSON.stringify(state.paging)
      }
    })
  }

  /**
   * 获取参数
   */
  const handleGetQuery = () => {
    const { paging } = route.query
    if (typeof paging === 'string') {
      state.paging = Object.assign(state.paging, JSON.parse(paging))
    }
  }

  /**
   * 获取表格数据
   */
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
      handleSetQuery()
    }
  }

  /**
   * 重置分页数据
   */
  const handlePagingReset = () => {
    state.paging.pageNo = defaultPageNo
    state.paging.pageSize = defaultPageSize
  }

  /**
   * 页数改变回调事件
   * @param pageSize 页数
   */
  const handlePagingPageSizeChange = (pageSize: number) => {
    state.paging.pageNo = 1
    state.paging.pageSize = pageSize
    handleGetTableList()
  }

  /**
   * 页码改变回调事件
   * @param pageNo 页码
   */
  const handlePagingPageCurrentChange = (pageNo: number) => {
    state.paging.pageNo = pageNo
    handleGetTableList()
  }

  onMounted(() => {
    handleGetQuery()
  })

  return {
    ...toRefs(state),
    handleGetTableList,
    handlePagingReset,
    handlePagingPageSizeChange,
    handlePagingPageCurrentChange
  }
}

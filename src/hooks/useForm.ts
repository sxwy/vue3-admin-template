import { ref, reactive, toRefs, onMounted, type UnwrapRef } from 'vue'
import { useRoute } from 'vue-router'
import { type FormInstance } from 'element-plus'

interface State<T> {
  form: UnwrapRef<T>
}

export const useForm = <T extends object>(options: T) => {
  const formRef = ref<FormInstance | null>(null)

  const state: State<T> = reactive({
    form: {
      ...options
    }
  })

  const route = useRoute()

  /**
   * 获取参数
   */
  const handleGetQuery = () => {
    const { form } = route.query
    if (typeof form === 'string') {
      state.form = Object.assign(state.form, JSON.parse(form))
    }
  }

  /**
   * 重置表格数据
   */
  const handleFormReset = () => {
    formRef.value!.resetFields()
  }

  onMounted(() => {
    handleGetQuery()
  })

  return {
    formRef,
    ...toRefs(state),
    handleFormReset
  }
}

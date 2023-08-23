import { ref, reactive, toRefs, type UnwrapRef } from 'vue'
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

  /**
   * 重置表格数据
   */
  const handleFormReset = () => {
    formRef.value!.resetFields()
  }

  return {
    formRef,
    ...toRefs(state),
    handleFormReset
  }
}

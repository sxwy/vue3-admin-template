import { ref, reactive, toRefs } from 'vue'
import { type FormInstance } from 'element-plus'

export const useForm = <T extends object>(options: T) => {
  const formRef = ref<FormInstance | null>(null)

  const state = reactive({
    form: {
      ...options
    }
  })

  const handleFormReset = () => {
    formRef.value!.resetFields()
  }

  return {
    formRef,
    ...toRefs(state),
    handleFormReset
  }
}

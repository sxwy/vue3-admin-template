<template>
  <el-dialog
    class="colorDialog"
    width="300px"
    append-to-body
    draggable
    :title="$t('common.tipText')"
    :model-value="modelValue"
    @close="handleClose"
  >
    <div class="content">
      <el-color-picker
        v-model="state.selectColor"
        show-alpha
        :predefine="predefineColors"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{
          $t('common.cancelText')
        }}</el-button>
        <el-button type="primary" @click="handleConfirm">
          {{ $t('common.confirmText') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { useAppStore } from '@/store'
  import { setElCSSVar } from '@/utils'

  interface State {
    /** 选择的颜色 */
    selectColor: string
  }

  interface Props {
    /** 弹框是否展示 */
    modelValue: boolean
  }

  withDefaults(defineProps<Props>(), {
    modelValue: false
  })

  const emits = defineEmits(['update:modelValue'])

  const app = useAppStore()

  const state: State = reactive({
    selectColor: app.themePrimaryColor
  })

  /** 颜色选择器中的预设值 */
  const predefineColors = [
    '#009688',
    '#DAA96E',
    '#0C819F',
    '#409EFF',
    '#27AE60',
    '#FF5C93',
    '#E74C3C',
    '#FD726D',
    '#F39C12',
    '#9B59B6'
  ]

  const handleClose = () => {
    emits('update:modelValue', false)
  }

  const handleConfirm = () => {
    app.setlThemePrimaryColor(state.selectColor)
    setElCSSVar(state.selectColor)
    handleClose()
  }
</script>

<style lang="scss" scoped>
  .colorDialog {
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

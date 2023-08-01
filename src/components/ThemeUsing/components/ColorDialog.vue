<template>
  <el-dialog
    class="colorDialog"
    title="Tips"
    width="30%"
    append-to-body
    draggable
    :model-value="modelValue"
    @close="handleClose"
  >
    <div class="content">
      <el-color-picker
        v-model="state.selectColor"
        :show-alpha="true"
        :predefine="predefineColors"
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { generateNewStyle } from '../utils'

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

  const state: State = reactive({
    selectColor: ''
  })

  /** 预定义色值 */
  const predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577'
  ]

  const handleClose = () => {
    emits('update:modelValue', false)
  }

  const handleConfirm = () => {
    console.log(
      '%c color==========>',
      'color: #4FC08D; font-weight: bold',
      state.selectColor
    )
    generateNewStyle(state.selectColor)
    // handleClose()
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

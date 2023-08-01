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
        show-alpha
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
  import { defaultColor, predefineColors } from '../constants'
  import { generateNewStyle, writeNewStyle } from '../utils'

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
    selectColor: defaultColor
  })

  const handleClose = () => {
    emits('update:modelValue', false)
  }

  const handleConfirm = () => {
    const styleText = generateNewStyle(state.selectColor)
    writeNewStyle(styleText)
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

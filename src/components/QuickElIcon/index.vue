<template>
  <el-icon :size="size">
    <component :is="currentElIcon"></component>
  </el-icon>
</template>

<script lang="ts" setup>
  import { type Component, computed } from 'vue'
  import * as ElIcons from '@element-plus/icons-vue'

  type ElIconsType = typeof ElIcons

  interface ElIconsTypeExtend extends ElIconsType {
    [key: string]: Component
  }

  interface Props {
    /** 图标 */
    icon: string
    /** 大小 */
    size?: number | string
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: '',
    size: ''
  })

  /** 当前的 elIcon 组件 */
  const currentElIcon = computed(() => {
    if (props.icon) {
      return (ElIcons as ElIconsTypeExtend)[props.icon]
    } else {
      return null
    }
  })
</script>

<style lang="scss" scoped></style>

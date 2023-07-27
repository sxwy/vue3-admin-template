<template>
  <div class="sidebarMenuItem">
    <el-icon v-if="currentElIcon">
      <component :is="currentElIcon"></component>
    </el-icon>
    <div>{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { type Component, computed } from 'vue'
  import * as ElIcons from '@element-plus/icons-vue'

  type ElIconsType = typeof ElIcons

  interface ElIconsTypeExtend extends ElIconsType {
    [key: string]: Component
  }

  interface Props {
    /** 标题 */
    title: string
    /** 图标 */
    icon: string
  }

  const props = withDefaults(defineProps<Props>(), {
    title: '',
    icon: ''
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

<style lang="scss" scoped>
  .sidebarMenuItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

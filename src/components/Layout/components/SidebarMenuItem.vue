<template>
  <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
  <svg-icon v-else :icon="icon"></svg-icon> -->
  <div>{{ title }}</div>
</template>

<script lang="ts" setup>
  interface Props {
    /** 标题 */
    title: string
    /** 图标 */
    icon: string
  }

  withDefaults(defineProps<Props>(), {
    title: '',
    icon: ''
  })
</script>

<style lang="scss" scoped></style>

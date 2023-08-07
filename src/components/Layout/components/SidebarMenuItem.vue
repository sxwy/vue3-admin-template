<template>
  <QuickElIcon v-if="icon" :icon="icon" />
  <span>{{ $t(`common.routes.${title}`) }}</span>
</template>

<script lang="ts" setup>
  import QuickElIcon from '@/components/QuickElIcon/index.vue'

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

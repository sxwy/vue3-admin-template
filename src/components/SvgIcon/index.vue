<template>
  <div v-if="isExternal" class="svgIcon" :style="externalStyle" />
  <svg v-else class="svgIcon" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    /** 图标 */
    icon: {
      type: String,
      required: true
    },
    /** 颜色 */
    color: {
      type: String,
      default: 'currentColor'
    }
  })

  /** 是否为外部图标 */
  const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.icon))

  /** 外部图标样式（因为 v-bind 不支持 image url，所以这边使用 style） */
  const externalStyle = computed(() => {
    return {
      // 外部的 svg 图标 https://res.lgdsunday.club/user.svg
      // 内部的 svg 图标表示是在 assets 下的 svg 目录中的图标
      '-webkit-mask-image': `url(${props.icon})`, // mask 是遮罩的意思
      '-webkit-mask-size': 'cover',
      '-webkit-mask-repeat': 'no-repeat',
      'background-color': props.color
    }
  })

  /** 内部图标完整名称 */
  // 使用 icon- 前缀是因为在 vite-plugin-svg-icons 中配置的 symbolId 是 icon-
  // 前面加了 # 表示 ID 的意思
  const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style lang="scss" scoped>
  .svgIcon {
    width: 1em;
    height: 1em;
  }
</style>

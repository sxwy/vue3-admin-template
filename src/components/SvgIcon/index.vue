<template>
  <div v-if="isExternal" class="svgIcon" :style="externalStyle" />
  <svg v-else class="svgIcon" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const PREFIX = '#icon'

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

  /** 外部图标样式 */
  const externalStyle = computed(() => {
    return {
      'background-color': props.color,
      '-webkit-mask-image': `url(${props.icon})`,
      '-webkit-mask-size': 'cover',
      '-webkit-mask-repeat': 'no-repeat'
    }
  })

  /** 内部图标完整名称 */
  const iconName = computed(() => `${PREFIX}-${props.icon}`)
</script>

<style lang="scss" scoped>
  .svgIcon {
    width: 1em;
    height: 1em;
  }
</style>

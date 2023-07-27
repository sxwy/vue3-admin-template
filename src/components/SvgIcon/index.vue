<template>
  <div v-if="isExternal" class="svgIcon external" :style="externalStyle" />
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
      // 因为在 class 中使用 url(v-bind) 不生效，所以使用动态 style
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

  .external {
    background-color: v-bind('props.color');
  }
</style>

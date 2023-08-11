<template>
  <div class="screenFull" @click="handleToggle">
    <el-tooltip :content="$t('components.screenFull.tooltip')" effect="light">
      <SvgIcon
        class="svgIcon"
        :icon="state.isFullscreen ? 'fullscreen-exit' : 'fullscreen'"
      />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted, onUnmounted } from 'vue'
  import screenfull from 'screenfull'
  import SvgIcon from '@/components/SvgIcon/index.vue'

  interface State {
    isFullscreen: boolean
  }

  const state: State = reactive({
    isFullscreen: false
  })

  const handleFullScreenChange = () => {
    state.isFullscreen = screenfull.isFullscreen
  }

  const handleToggle = () => {
    screenfull.toggle()
  }

  onMounted(() => {
    screenfull.on('change', handleFullScreenChange)
  })

  onUnmounted(() => {
    screenfull.off('change', handleFullScreenChange)
  })
</script>

<style lang="scss" scoped>
  .screenFull {
    cursor: pointer;

    .svgIcon {
      width: 22px;
      height: 22px;
    }
  }
</style>

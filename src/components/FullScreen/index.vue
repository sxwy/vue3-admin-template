<template>
  <div class="fullScreen" @click="handleToggle">
    <el-tooltip :content="$t('components.fullScreen.tooltip')" effect="light">
      <SvgIcon
        class="svgIcon"
        :icon="state.isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
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
  .fullScreen {
    cursor: pointer;

    .svgIcon {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
</style>

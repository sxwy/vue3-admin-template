<template>
  <div class="hamburger" @click="handleToggleClick">
    <SvgIcon class="svgIcon" :icon="icon" />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useAppStore } from '@/store'
  import SvgIcon from '@/components/SvgIcon/index.vue'

  const app = useAppStore()

  /**
   * 点击切换按钮
   */
  const handleToggleClick = () => {
    app.toggleSidebarCollapse()
  }

  const icon = computed(() =>
    app.isSidebarCollapse ? 'hamburger_open' : 'hamburger_close'
  )
</script>

<style lang="scss" scoped>
  .hamburger {
    padding: 5px;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: rgb(0 0 0 / 10%);
    }

    .svgIcon {
      width: 22px;
      height: 22px;
    }
  }
</style>

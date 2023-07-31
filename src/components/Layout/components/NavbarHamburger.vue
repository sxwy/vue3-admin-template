<template>
  <div class="navbarHamburger" @click="handleToggleClick">
    <SvgIcon class="svg" :icon="icon" />
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useAppStore } from '@/store'
  import SvgIcon from '@/components/SvgIcon/index.vue'

  const app = useAppStore()

  /** 点击切换按钮 */
  const handleToggleClick = () => {
    app.toggleSidebarCollapse()
  }

  const icon = computed(() =>
    app.isSidebarCollapse ? 'hamburger_open' : 'hamburger_close'
  )
</script>

<style lang="scss" scoped>
  .navbarHamburger {
    padding: 15px;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background: rgb(0 0 0 / 10%);
    }

    .svg {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
</style>

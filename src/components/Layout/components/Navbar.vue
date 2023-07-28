<template>
  <div class="navbar">
    <button @click="handleClick">按钮</button>
    <div class="right">
      <NavbarUserDropdown />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import NavbarUserDropdown from './NavbarUserDropdown.vue'
  import { useAppStore } from '@/store'

  const app = useAppStore()

  const handleClick = () => {
    app.toggleSidebarCollapseState()
  }
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .right {
      height: 100%;
      display: flex;
      align-items: center;
      float: right;
      padding-right: 16px;
    }
  }
</style>

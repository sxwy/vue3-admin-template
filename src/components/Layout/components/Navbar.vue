<template>
  <div class="navbar">
    <div class="left">
      <Hamburger />
      <Breadcrumb />
    </div>
    <div class="right">
      <RouteSearch class="routeSearch" />
      <ScreenFull class="screenFull" />
      <ThemeUsing class="themeUsing" />
      <LangDropdown class="langDropdown" />
      <NavbarUserDropdown />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Hamburger from '@/components/Hamburger/index.vue'
  import Breadcrumb from '@/components/Breadcrumb/index.vue'
  import ScreenFull from '@/components/ScreenFull/index.vue'
  import ThemeUsing from '@/components/ThemeUsing/index.vue'
  import LangDropdown from '@/components/LangDropdown/index.vue'
  import RouteSearch from '@/components/RouteSearch/index.vue'
  import NavbarUserDropdown from './NavbarUserDropdown.vue'
</script>

<style lang="scss" scoped>
  .navbar {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .left {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .right {
      height: 100%;
      display: flex;
      align-items: center;

      .routeSearch,
      .screenFull,
      .themeUsing,
      .langDropdown {
        margin-right: 15px;
      }
    }
  }
</style>

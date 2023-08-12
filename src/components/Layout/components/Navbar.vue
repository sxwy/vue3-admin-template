<template>
  <div class="navbar">
    <div class="left">
      <Hamburger />
      <Breadcrumb class="breadcrumb" />
    </div>
    <div class="right">
      <Guide class="guide" />
      <MenuSearch class="menuSearch" />
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
  import Guide from '@/components/Guide/index.vue'
  import LangDropdown from '@/components/LangDropdown/index.vue'
  import MenuSearch from '@/components/MenuSearch/index.vue'
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
      padding-left: 10px;

      .breadcrumb {
        margin-left: 15px;
      }
    }

    .right {
      height: 100%;
      display: flex;
      align-items: center;
      padding-right: 15px;

      .guide,
      .menuSearch,
      .screenFull,
      .themeUsing,
      .langDropdown {
        margin-right: 15px;
      }
    }
  }
</style>

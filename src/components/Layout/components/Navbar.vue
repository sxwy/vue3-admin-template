<template>
  <div class="navbar">
    <div class="left">
      <NavbarHamburger />
      <NavbarBreadcrumb />
    </div>
    <div class="right">
      <NavbarUserDropdown />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import NavbarHamburger from './NavbarHamburger.vue'
  import NavbarBreadcrumb from './NavbarBreadcrumb.vue'
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
    }
  }
</style>

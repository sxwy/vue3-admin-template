<template>
  <div class="navbar">
    <div class="right">
      <c-user-dropdown />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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

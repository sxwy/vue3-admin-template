<template>
  <div class="sidebar">
    <div class="logo">顶部logo</div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import SidebarMenu from './SidebarMenu.vue'
</script>

<style lang="scss" scoped></style>

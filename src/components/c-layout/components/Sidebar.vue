<template>
  <div class="sidebar">
    <h5 class="mb-2">Default colors</h5>
    <el-menu
      default-active="2"
      menu-trigger="click"
      :unique-opened="true"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-2">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="1-7-4">
          <template #title>item four</template>
          <el-menu-item index="1-7-4-1">item one</el-menu-item>
          <el-menu-item index="1-7-4-2">item one</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="1-5-1">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="6-1">item one</el-menu-item>
        <el-menu-item index="6-2">item two</el-menu-item>
        <el-menu-item index="6-3">item three</el-menu-item>
        <el-menu-item index="6-5-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
  import { Location } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>

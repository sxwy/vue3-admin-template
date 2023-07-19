<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <SidebarMenuItem :title="route.meta.title" :icon="route.meta.icon" />
    </template>
    <!-- 循环渲染 -->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-sub-menu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
    <SidebarMenuItem :title="route.meta.title" :icon="route.meta.icon" />
  </el-menu-item>
</template>

<script lang="ts" setup>
  import SidebarMenuItem from './SidebarMenuItem.vue'
  interface Props {
    /** 路由 */
    route: any
  }

  withDefaults(defineProps<Props>(), {
    route: {}
  })
</script>

<style lang="scss" scoped></style>

<template>
  <!-- 渲染多级菜单 -->
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <SidebarMenuItem
        :title="route.meta?.title"
        :icon="route.meta?.menuIcon"
      />
    </template>
    <!-- 循环渲染 -->
    <SidebarSubMenu
      v-for="item of route.children"
      :route="item"
      :key="item.path"
    ></SidebarSubMenu>
  </el-sub-menu>
  <!-- 渲染一级菜单 -->
  <el-menu-item
    v-else
    :index="route.path"
    @click="handleMenuItemClick(route.path)"
  >
    <SidebarMenuItem :title="route.meta?.title" :icon="route.meta?.menuIcon" />
  </el-menu-item>
</template>

<script lang="ts" setup>
  import {
    useRoute,
    useRouter,
    type RouteRecordNormalized,
    type RouteRecordRaw
  } from 'vue-router'
  import SidebarMenuItem from './SidebarMenuItem.vue'

  interface Props {
    /** 路由 */
    route: RouteRecordNormalized | RouteRecordRaw
  }

  defineProps<Props>()

  const routeInfo = useRoute()
  const router = useRouter()

  const handleMenuItemClick = (path: string) => {
    if (path === routeInfo.path) {
      return
    }
    router.push(path)
  }
</script>

<style lang="scss" scoped></style>

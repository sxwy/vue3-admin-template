<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    default-active=""
    :collapse="true"
    background-color=""
    text-color=""
    active-text-color=""
    :unique-opened="true"
    router
  >
    <SidebarSubMenu v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import SidebarSubMenu from './SidebarSubMenu.vue'
  import { useRouter, useRoute } from 'vue-router'

  // 计算路由表结构
  const router = useRouter()
  const routes = computed(() => {
    return [] as any
  })

  // 计算高亮 menu 的方法
  const route = useRoute()
  const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) {
      return meta.activeMenu
    }
    return path
  })
</script>

<style lang="scss" scoped></style>

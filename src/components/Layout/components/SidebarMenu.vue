<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    default-active="/main"
    background-color=""
    text-color=""
    active-text-color=""
    :router="true"
    :collapse="false"
    :unique-opened="true"
    class="sidebar-menu"
  >
    <SidebarSubMenu v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import SidebarSubMenu from './SidebarSubMenu.vue'
  import { filterRouters, generateMenus } from '../utils'

  const router = useRouter()

  const routes = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
  })

  console.log(
    '%c routes==========>',
    'color: #4FC08D; font-weight: bold',
    router.getRoutes()
  )

  console.log(
    '%c routes==========>',
    'color: #4FC08D; font-weight: bold',
    routes.value
  )
</script>

<style lang="scss" scoped>
  .sidebar-menu {
    width: 100%;
  }
</style>

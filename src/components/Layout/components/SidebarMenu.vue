<template>
  <el-menu
    class="sidebarMenu"
    router
    unique-opened
    :collapse-transition="false"
    :collapse="!app.isSidebarCollapse"
    :default-active="route.path"
    :text-color="variables.menuTextColor"
    :background-color="variables.menuBgColor"
    :active-text-color="variables.menuActiveTextColor"
  >
    <SidebarSubMenu v-for="item of routes" :route="item" :key="item.path" />
  </el-menu>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStore } from '@/store'
  import variables from '@/styles/variables.module.scss'
  import SidebarSubMenu from './SidebarSubMenu.vue'
  import { filterRouters, generateMenus } from '../utils'

  const route = useRoute()
  const router = useRouter()

  const app = useAppStore()

  const routes = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .sidebarMenu {
    border: none;

    :deep(.el-sub-menu.is-active) {
      .el-sub-menu__title {
        color: $menuActiveTextColor !important;
      }
    }

    :deep(.el-sub-menu__title) {
      &:hover {
        color: $menuHoverTextColor !important;
      }
    }

    :deep(.el-menu-item) {
      &:hover {
        color: $menuHoverTextColor;
        background-color: transparent;
      }
    }

    :deep(.el-menu-item.is-active) {
      background-color: $subMenuBgColor;
    }
  }
</style>

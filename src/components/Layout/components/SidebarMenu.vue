<template>
  <el-menu
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
  import { filterRoutes, generateMenus } from '@/utils'

  const route = useRoute()
  const router = useRouter()

  const app = useAppStore()

  const routes = computed(() => {
    const routeList = filterRoutes(router.getRoutes())
    return generateMenus(routeList)
  })
</script>

<style lang="scss" scoped>
  // .sidebarMenu {
  //   border: none;

  //   :deep(.el-sub-menu.is-active) {
  //     .el-sub-menu__title {
  //       color: $menuActiveTextColor !important;
  //     }
  //   }

  //   :deep(.el-sub-menu__title) {
  //     &:hover {
  //       color: $menuActiveTextColor !important;
  //     }
  //   }

  //   :deep(.el-menu-item) {
  //     &:hover {
  //       color: $menuActiveTextColor;
  //       background-color: transparent;
  //     }
  //   }

  //   :deep(.el-menu-item.is-active) {
  //     background-color: $primaryColor;
  //   }

  //   :deep(.el-menu.el-menu--inline) {
  //     background-color: $subMenuBgColor;
  //   }
  // }
</style>

<template>
  <div class="layout" :class="{ sidebarCollapse: !app.isSidebarCollapse }">
    <Sidebar class="sidebar" />
    <div class="content">
      <Navbar class="navbar" />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store'
  import Sidebar from './components/Sidebar.vue'
  import Navbar from './components/Navbar.vue'
  import AppMain from './components/AppMain.vue'

  const app = useAppStore()
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .layout {
    position: relative;
    height: 100vh;
    width: 100%;

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: $sideBarWidth;
      height: 100%;
      transition: width $sideBarCollapseTransitionDuration;
      background-color: $menuBgColor;
    }

    .content {
      position: relative;
      height: 100%;
      margin-left: $sideBarWidth;
      transition: margin-left $sideBarCollapseTransitionDuration;

      .navbar {
        position: fixed;
        top: 0;
        right: 0;
        width: calc(100% - $sideBarWidth);
        transition: width $sideBarCollapseTransitionDuration;
      }
    }
  }

  .sidebarCollapse {
    .sidebar {
      width: $collapseSideBarWidth;
    }

    .content {
      margin-left: $collapseSideBarWidth;

      .navbar {
        width: calc(100% - #{$collapseSideBarWidth});
      }
    }
  }
</style>

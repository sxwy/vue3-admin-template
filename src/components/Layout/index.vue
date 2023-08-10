<template>
  <div class="layout" :class="{ sidebarCollapse: !app.isSidebarCollapse }">
    <Sidebar class="sidebar" />
    <div class="content">
      <div class="header">
        <Navbar />
        <TagsView />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store'
  import TagsView from '@/components/TagsView/index.vue'
  import Sidebar from './components/Sidebar.vue'
  import Navbar from './components/Navbar.vue'
  import AppMain from './components/AppMain.vue'

  const app = useAppStore()
</script>

<style lang="scss" scoped>
  $sideBarWidth: 210px; // 侧边栏宽度
  $sideBarCollapseWidth: 64px; // 侧边栏折叠时的宽度
  $sideBarCollapseTransitionDuration: 0.3s; // 侧边栏折叠动画时长

  .layout {
    position: relative;
    height: 100vh;
    width: 100%;

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
      width: $sideBarWidth;
      height: 100%;
      transition: width $sideBarCollapseTransitionDuration;
    }

    .content {
      position: relative;
      height: 100%;
      margin-left: $sideBarWidth;
      transition: margin-left $sideBarCollapseTransitionDuration;

      .header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - $sideBarWidth);
        transition: width $sideBarCollapseTransitionDuration;
      }
    }
  }

  .sidebarCollapse {
    .sidebar {
      width: $sideBarCollapseWidth;
    }

    .content {
      margin-left: $sideBarCollapseWidth;

      .header {
        width: calc(100% - #{$sideBarCollapseWidth});
      }
    }
  }
</style>

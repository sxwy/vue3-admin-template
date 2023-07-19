<template>
  <div class="c-layout">
    <Sidebar
      class="sidebar"
      :style="{
        backgroundColor: variables.menuBgColor
      }"
    />
    <div class="content">
      <div class="header">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Sidebar from './components/Sidebar/index.vue'
  import Navbar from './components/Navbar/index.vue'
  import AppMain from './components/AppMain.vue'
  import variables from '@/styles/variables.module.scss'
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .c-layout {
    position: relative;
    height: 100vh;
    width: 100%;

    .sidebar {
      transition: width #{$sideBarDuration};
      width: $sideBarWidth !important;
      height: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;

      // 重置 element-plus 的css
      .horizontal-collapse-transition {
        transition: 0s width ease-in-out, 0s padding-left ease-in-out,
          0s padding-right ease-in-out;
      }

      .scrollbar-wrapper {
        overflow-x: hidden !important;
      }

      .el-scrollbar__bar.is-vertical {
        right: 0;
      }

      .el-scrollbar {
        height: 100%;
      }

      &.has-logo {
        .el-scrollbar {
          height: calc(100% - 50px);
        }
      }

      .is-horizontal {
        display: none;
      }

      a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
      }

      .svg-icon {
        margin-right: 16px;
      }

      .sub-el-icon {
        margin-right: 12px;
        margin-left: -2px;
      }

      .el-menu {
        border: none;
        height: 100%;
        width: 100% !important;
      }

      .is-active > .el-submenu__title {
        color: $subMenuActiveTextColor !important;
      }

      & .nest-menu .el-submenu > .el-submenu__title,
      & .el-submenu .el-menu-item {
        min-width: $sideBarWidth !important;
      }
    }

    .content {
      min-height: 100%;
      transition: margin-left #{$sideBarDuration};
      margin-left: $sideBarWidth;
      position: relative;

      .header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width #{$sideBarDuration};
      }
    }
  }

  .hideSidebar {
    .sidebar {
      width: 54px !important;
    }

    .content {
      margin-left: 54px;
    }

    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }

        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }

    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }

  .el-menu--collapse .el-menu .el-submenu {
    min-width: $sideBarWidth !important;
  }

  .withoutAnimation {
    .right,
    .sidebar {
      transition: none;
    }
  }

  .el-menu--vertical {
    & > .el-menu {
      .svg-icon {
        margin-right: 16px;
      }

      .sub-el-icon {
        margin-right: 12px;
        margin-left: -2px;
      }
    }

    // 菜单项过长时
    > .el-menu--popup {
      max-height: 100vh;
      overflow-y: auto;

      &::-webkit-scrollbar-track-piece {
        background: #d3dce6;
      }

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: #99a9bf;
        border-radius: 20px;
      }
    }
  }
</style>

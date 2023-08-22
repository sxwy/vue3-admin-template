<template>
  <div class="sidebar">
    <div class="logo" @click="handleLogoClick">
      <img src="../assets/logo.png" class="img" />
      <div v-show="app.isSidebarCollapse" class="title">{{ APP_NAME }}</div>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/store'
  import { APP_NAME } from '@/constants'
  import SidebarMenu from './SidebarMenu.vue'

  const router = useRouter()
  const app = useAppStore()

  /**
   * 点击 logo 按钮
   */
  const handleLogoClick = () => {
    router.push('/')
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  $logoHeight: 50px; // logo 区域高度

  .sidebar {
    background-color: $menuBgColor;

    .logo {
      box-sizing: border-box;
      height: $logoHeight;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .img {
        width: 30px;
        height: 30px;
      }

      .title {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .el-scrollbar {
      height: calc(100% - $logoHeight);

      :deep(.el-scrollbar__bar.is-horizontal) {
        display: none;
      }
    }
  }
</style>

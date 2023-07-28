<template>
  <div class="sidebar">
    <div class="logo" @click="handleLogoClick">
      <img src="../assets/logo.png" class="img" />
      <div v-show="sidebarOpen" class="title">{{ APP_NAME }}</div>
    </div>
    <el-scrollbar>
      <SidebarMenu />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/store'
  import { APP_NAME } from '@/constants'
  import SidebarMenu from './SidebarMenu.vue'

  const router = useRouter()
  const app = useAppStore()

  /** 侧边栏是否打开 */
  const sidebarOpen = computed(() => {
    return app.sidebarCollapseState === 'open'
  })

  /** 点击 logo 按钮 */
  const handleLogoClick = () => {
    router.push('/')
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    .logo {
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
      }
    }
  }
</style>

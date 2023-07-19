<template>
  <el-dropdown trigger="click" class="user-dropdown">
    <div>
      <el-avatar
        shape="square"
        class="avatar"
        :src="user.current?.avatar"
      ></el-avatar>
      <el-icon>
        <Setting />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <RouterLink to="/">
          <el-dropdown-item>主页</el-dropdown-item>
        </RouterLink>
        <el-dropdown-item :divided="true" @click="handleLogout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/store'
  import { RouterLink, useRouter } from 'vue-router'
  import { Setting } from '@element-plus/icons-vue'

  const user = useUserStore()
  const router = useRouter()

  /** 点击退出登录按钮 */
  const handleLogout = () => {
    user.logout()
    router.push('/login/home')
  }
</script>

<style lang="scss" scoped>
  .user-dropdown {
    cursor: pointer;

    .avatar {
      margin-right: 5px;
    }
  }

  :deep(.router-link-active) {
    text-decoration: none;
  }
</style>

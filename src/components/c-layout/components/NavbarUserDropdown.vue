<template>
  <el-dropdown trigger="click" class="navbar-user-dropdown">
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
  import { RouterLink, useRouter } from 'vue-router'
  import { ElMessageBox } from 'element-plus'
  import { Setting } from '@element-plus/icons-vue'
  import { useUserStore } from '@/store'

  const user = useUserStore()
  const router = useRouter()

  /** 点击退出登录按钮 */
  const handleLogout = () => {
    ElMessageBox.confirm('是否确认退出系统?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        user.logout()
        router.push('/basics/login/index')
      })
      .catch(() => {
        console.log(
          '%c 点击取消按钮==========>',
          'color: #4FC08D; font-weight: bold'
        )
      })
  }
</script>

<style lang="scss" scoped>
  .navbar-user-dropdown {
    cursor: pointer;

    .avatar {
      margin-right: 5px;
    }
  }

  :deep(.router-link-active) {
    text-decoration: none;
  }
</style>

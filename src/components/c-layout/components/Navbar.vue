<template>
  <div class="navbar">
    <div class="right">
      <el-dropdown trigger="click" class="dropdown">
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
    </div>
  </div>
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
  .navbar {
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .right {
      height: 100%;
      display: flex;
      align-items: center;
      float: right;
      padding-right: 16px;

      .dropdown {
        cursor: pointer;

        .avatar {
          margin-right: 5px;
        }
      }
    }
  }

  :deep(.router-link-active) {
    text-decoration: none;
  }
</style>

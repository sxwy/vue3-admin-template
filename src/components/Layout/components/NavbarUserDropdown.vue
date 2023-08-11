<template>
  <el-dropdown class="navbarUserDropdown">
    <div>
      <el-avatar
        shape="square"
        class="avatar"
        :src="user.current?.avatar"
      ></el-avatar>
      <QuickElIcon icon="Setting" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <RouterLink to="/">
          <el-dropdown-item>{{
            $t('components.layout.navbarUserDropdownHome')
          }}</el-dropdown-item>
        </RouterLink>
        <el-dropdown-item :divided="true" @click="handleLogout">{{
          $t('components.layout.navbarUserDropdownLogout')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { ElMessageBox } from 'element-plus'
  import QuickElIcon from '@/components/QuickElIcon/index.vue'
  import { useUserStore } from '@/store'
  import i18n from '@/i18n'

  const user = useUserStore()
  const router = useRouter()

  /** 点击退出登录按钮 */
  const handleLogout = () => {
    ElMessageBox.confirm(
      i18n.global.t('components.layout.navbarUserDropdownLogoutTip'),
      i18n.global.t('common.tipText'),
      {
        confirmButtonText: i18n.global.t('common.confirmText'),
        cancelButtonText: i18n.global.t('common.cancelText'),
        type: 'warning'
      }
    )
      .then(() => {
        user.logout()
        router.push('/login/index')
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
  .navbarUserDropdown {
    cursor: pointer;

    .avatar {
      margin-right: 5px;
    }
  }

  .el-dropdown-menu {
    :deep(a) {
      text-decoration: none;
    }
  }
</style>

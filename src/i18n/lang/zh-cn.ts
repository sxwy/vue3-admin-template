export default {
  /** 公共 */
  common: {
    routes: {
      LoginIndex: '登录',
      Dashboard: '仪表盘',
      DashboardConsoleIndex: '控制台',
      DashboardWorkbenchIndex: '工作台',
      System: '系统管理',
      SystemRoleIndex: '角色管理',
      SystemRoleAdd: '添加角色',
      SystemRoleEdit: '修改角色',
      SystemUserIndex: '用户管理',
      SystemUserAdd: '添加用户',
      SystemUserEdit: '修改用户',
      Media: '媒体管理',
      MediaAudioIndex: '音频管理',
      MediaAudioAdd: '添加音频',
      MediaAudioEdit: '修改音频',
      MediaVideoIndex: '视频管理',
      MediaVideoAdd: '添加视频',
      MediaVideoEdit: '修改视频'
    },
    tipText: '提示',
    confirmText: '确认',
    cancelText: '取消',
    closeText: '关闭'
  },
  /** 页面 */
  pages: {
    login: {
      title: '登录',
      btnText: '登录',
      accountRuleMessage: '请输入账号',
      passwordRuleMessage: '请输入密码'
    }
  },
  /** 组件 */
  components: {
    layout: {
      navbarUserDropdownHome: '主页',
      navbarUserDropdownLogout: '退出登录',
      navbarUserDropdownLogoutTip: '是否确认退出系统？'
    },
    langDropdown: {
      tooltip: '国际化',
      switchLangSuccess: '切换语言成功'
    },
    themeUsing: {
      tooltip: '主题修改'
    }
  }
}

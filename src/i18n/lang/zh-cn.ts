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
      tooltip: '主题',
      title: '主题',
      usingSuccess: '切换主题成功'
    },
    screenFull: {
      tooltip: '全屏'
    },
    menuSearch: {
      tooltip: '搜索',
      inputPlaceholder: '搜索',
      empty: '暂无数据',
      enter: '确认',
      upDown: '切换',
      esc: '关闭'
    },
    guide: {
      tooltip: '引导',
      done: '完成',
      next: '下一步',
      prev: '上一步',
      sidebarTitle: '侧边栏',
      sidebarDescription: '菜单列表',
      hamburgerTitle: '伸缩',
      hamburgerDescription: '侧边栏伸缩',
      guideTitle: '引导',
      guideDescription: '打开功能引导',
      menuSearchTitle: '搜索',
      menuSearchDescription: '页面菜单搜索',
      screenFullTitle: '全屏',
      screenFullDescription: '页面全屏切换',
      themeUsingTitle: '主题',
      themeUsingDescription: '切换项目主题',
      langDropdownTitle: '国际化',
      langDropdownDescription: '切换语言',
      navbarUserDropdownTitle: '用户',
      navbarUserDropdownDescription: '账号信息',
      tagsViewTitle: '标签栏',
      tagsViewDescription: '页面历史记录'
    }
  }
}

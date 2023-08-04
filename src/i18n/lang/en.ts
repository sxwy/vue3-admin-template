export default {
  /** 公共 */
  common: {
    routes: {
      LoginIndex: 'Login',
      Dashboard: 'Dashboard',
      DashboardConsoleIndex: 'Console',
      DashboardWorkbenchIndex: 'Workbench',
      System: 'SystemManage',
      SystemRoleIndex: 'RoleManage',
      SystemRoleAdd: 'AddRole',
      SystemRoleEdit: 'EditRole',
      SystemUserIndex: 'UserManage',
      SystemUserAdd: 'AddUser',
      SystemUserEdit: 'EditUser',
      Media: 'MediaManage',
      MediaAudioIndex: 'AudioManage',
      MediaAudioAdd: 'AddAudio',
      MediaAudioEdit: 'EditAudio',
      MediaVideoIndex: 'VideoManage',
      MediaVideoAdd: 'AddVideo',
      MediaVideoEdit: 'EditVideo'
    },
    tipText: 'tip',
    confirmText: 'confirm',
    cancelText: 'cancel',
    closeText: 'close'
  },
  /** 页面 */
  pages: {
    login: {
      title: 'login',
      btnText: 'login',
      accountRuleMessage: 'Please enter your account number',
      passwordRuleMessage: 'Please enter your password'
    }
  },
  /** 组件 */
  components: {
    layout: {
      navbarUserDropdownHome: 'Home',
      navbarUserDropdownLogout: 'Logout',
      navbarUserDropdownLogoutTip: 'Do you want to log out of the system?'
    },
    langDropdown: {
      tooltip: 'Globalization',
      switchLangSuccess: 'Switch Language Success'
    },
    themeUsing: {
      tooltip: 'Theme Modification'
    },
    fullScreen: {
      tooltip: 'Full Screen'
    }
  }
}

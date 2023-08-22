export default {
  /** 公共 */
  common: {
    routes: {
      Exception: 'exception',
      ExceptionNotFoundIndex: '404',
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
      switchLangSuccess: 'Switch language success'
    },
    themeUsing: {
      tooltip: 'Theme',
      title: 'Theme',
      usingSuccess: 'Switch theme success'
    },
    screenFull: {
      tooltip: 'Screen Full'
    },
    menuSearch: {
      tooltip: 'Search',
      inputPlaceholder: 'Search',
      empty: 'No Data',
      enter: 'to select',
      upDown: 'to navigate',
      esc: 'to close'
    },
    guide: {
      tooltip: 'guide',
      done: 'done',
      next: 'next',
      prev: 'prev',
      sidebarTitle: 'Sidebar',
      sidebarDescription: 'Menu list',
      hamburgerTitle: 'Flexible',
      hamburgerDescription: 'Sidebar flexible',
      guideTitle: 'Guide',
      guideDescription: 'Open function boot',
      menuSearchTitle: 'Search',
      menuSearchDescription: 'Page menu search',
      screenFullTitle: 'Screen Full',
      screenFullDescription: 'Page full screen switch',
      themeUsingTitle: 'Theme',
      themeUsingDescription: 'Switch project topic',
      langDropdownTitle: 'Globalization',
      langDropdownDescription: 'Switch the language',
      navbarUserDropdownTitle: 'User',
      navbarUserDropdownDescription: 'Account information',
      tagsViewTitle: 'Tabbar',
      tagsViewDescription: 'Page history'
    }
  }
}

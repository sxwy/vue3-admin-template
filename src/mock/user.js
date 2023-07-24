/* eslint-disable @typescript-eslint/no-var-requires */

const MockJs = require('mockjs')

module.exports = {
  /** 登录 */
  'POST /base/api/login/v1.0': (req, res) => {
    setTimeout(() => {
      if (req.body.account === 'admin' && req.body.password === '123456') {
        const data = MockJs.mock({
          code: '10000',
          message: 'ok',
          body: {
            token: '@id'
          }
        })
        return res.json(data)
      } else {
        const data = MockJs.mock({
          code: '10001',
          message: '账号密码错误',
          body: null
        })
        return res.json(data)
      }
    }, 500)
  },
  /** 刷新 token */
  'POST /base/api/refreshToken/v1.0': (req, res) => {
    setTimeout(() => {
      const data = MockJs.mock({
        code: '10000',
        message: 'ok',
        body: {
          token: '@id'
        }
      })
      return res.json(data)
    }, 500)
  },
  /** 获取用户信息 */
  'POST /base/api/getUserInfo/v1.0': (req, res) => {
    setTimeout(() => {
      const data = MockJs.mock({
        code: '10000',
        message: 'ok',
        body: {
          id: '@id',
          name: '@cname',
          avatar: '@image(40x40)',
          routes: [
            {
              name: 'System',
              path: '/system',
              alias: undefined,
              redirect: '/system/role/index',
              component: 'Layout',
              meta: {
                menuAuth: true,
                menuShow: true,
                menuTitle: '权限管理',
                menuIcon: '',
                buttonAuth: []
              },
              children: [
                {
                  name: 'SystemRole',
                  path: 'role',
                  alias: undefined,
                  redirect: '/system/role/index',
                  component: undefined,
                  meta: {
                    menuAuth: true,
                    menuShow: false,
                    menuTitle: '角色管理',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: [
                    {
                      name: 'SystemRoleIndex',
                      path: 'index',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/role/index',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '角色管理',
                        menuIcon: '',
                        buttonAuth: ['add', 'edit', 'delete']
                      },
                      children: []
                    },
                    {
                      name: 'SystemRoleAdd',
                      path: 'add',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/role/add',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '添加角色',
                        menuIcon: '',
                        buttonAuth: []
                      },
                      children: []
                    },
                    {
                      name: 'SystemRoleEdit',
                      path: 'edit',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/role/edit',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '修改角色',
                        menuIcon: '',
                        buttonAuth: []
                      },
                      children: []
                    }
                  ]
                },
                {
                  name: 'SystemUser',
                  path: 'user',
                  alias: undefined,
                  redirect: '/system/user/index',
                  component: undefined,
                  meta: {
                    menuAuth: true,
                    menuShow: false,
                    menuTitle: '用户管理',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: [
                    {
                      name: 'SystemUserIndex',
                      path: 'index',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/user/index',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '用户管理',
                        menuIcon: '',
                        buttonAuth: ['add', 'edit', 'delete']
                      },
                      children: []
                    },
                    {
                      name: 'SystemUserAdd',
                      path: 'add',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/user/add',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '添加用户',
                        menuIcon: '',
                        buttonAuth: []
                      },
                      children: []
                    },
                    {
                      name: 'SystemUserEdit',
                      path: 'edit',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/user/edit',
                      meta: {
                        menuAuth: true,
                        menuShow: true,
                        menuTitle: '修改用户',
                        menuIcon: '',
                        buttonAuth: []
                      },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              name: 'Media',
              path: '/media',
              alias: undefined,
              redirect: '/media/audio/index',
              component: 'Layout',
              meta: {
                menuAuth: true,
                menuShow: true,
                menuTitle: '媒体管理',
                menuIcon: '',
                buttonAuth: []
              },
              children: [
                {
                  name: 'MediaAudioIndex',
                  path: 'audio/index',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/audio/index',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '音频管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  },
                  children: []
                },
                {
                  name: 'MediaAudioAdd',
                  path: 'audio/add',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/audio/add',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加音频',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: []
                },
                {
                  name: 'MediaAudioEdit',
                  path: 'audio/edit',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/audio/edit',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改音频',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: []
                },
                {
                  name: 'MediaVideoIndex',
                  path: 'video/index',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/video/index',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '视频管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  },
                  children: []
                },
                {
                  name: 'MediaVideoAdd',
                  path: 'video/add',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/video/add',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加视频',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: []
                },
                {
                  name: 'MediaVideoEdit',
                  path: 'video/edit',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/video/edit',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改视频',
                    menuIcon: '',
                    buttonAuth: []
                  },
                  children: []
                }
              ]
            }
          ]
        }
      })
      return res.json(data)
    }, 500)
  }
}

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
                title: '权限管理',
                menuShow: true,
                menuIcon: '',
                routePermission: true,
                buttonPermission: []
              },
              children: [
                {
                  name: 'SystemRole',
                  path: 'role',
                  alias: undefined,
                  redirect: '/system/role/index',
                  component: undefined,
                  meta: {
                    title: '角色管理',
                    menuShow: false,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
                  },
                  children: [
                    {
                      name: 'SystemRoleIndex',
                      path: 'index',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/role/index',
                      meta: {
                        title: '角色管理',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: ['add', 'edit', 'delete']
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
                        title: '添加角色',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: []
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
                        title: '修改角色',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: []
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
                    title: '用户管理',
                    menuShow: false,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
                  },
                  children: [
                    {
                      name: 'SystemUserIndex',
                      path: 'index',
                      alias: undefined,
                      redirect: undefined,
                      component: '/system/user/index',
                      meta: {
                        title: '用户管理',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: ['add', 'edit', 'delete']
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
                        title: '添加用户',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: []
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
                        title: '修改用户',
                        menuShow: true,
                        menuIcon: '',
                        routePermission: true,
                        buttonPermission: []
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
                title: '媒体管理',
                menuShow: true,
                menuIcon: '',
                routePermission: true,
                buttonPermission: []
              },
              children: [
                {
                  name: 'MediaAudioIndex',
                  path: 'audio/index',
                  alias: undefined,
                  redirect: undefined,
                  component: '/media/audio/index',
                  meta: {
                    title: '音频管理',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: ['add', 'edit', 'delete']
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
                    title: '添加音频',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
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
                    title: '修改音频',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
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
                    title: '视频管理',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: ['add', 'edit', 'delete']
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
                    title: '添加视频',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
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
                    title: '修改视频',
                    menuShow: true,
                    menuIcon: '',
                    routePermission: true,
                    buttonPermission: []
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

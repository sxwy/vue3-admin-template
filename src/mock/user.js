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
              alias: '',
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
                  name: 'RoleIndex',
                  path: 'role/index',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '角色管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  }
                },
                {
                  name: 'RoleAdd',
                  path: 'role/add',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加角色',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'RoleEdit',
                  path: 'role/edit',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改角色',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'UserIndex',
                  path: 'user/index',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '用户管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  }
                },
                {
                  name: 'UserAdd',
                  path: 'user/add',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加用户',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'UserEdit',
                  path: 'user/edit',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改用户',
                    menuIcon: '',
                    buttonAuth: []
                  }
                }
              ]
            },
            {
              name: 'Media',
              path: '/media',
              alias: '',
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
                  name: 'AudioIndex',
                  path: 'audio/index',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '音频管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  }
                },
                {
                  name: 'AudioAdd',
                  path: 'audio/add',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加音频',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'AudioEdit',
                  path: 'audio/edit',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改音频',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'VideoIndex',
                  path: 'video/index',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '视频管理',
                    menuIcon: '',
                    buttonAuth: ['add', 'edit', 'delete']
                  }
                },
                {
                  name: 'VideoAdd',
                  path: 'video/add',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '添加视频',
                    menuIcon: '',
                    buttonAuth: []
                  }
                },
                {
                  name: 'VideoEdit',
                  path: 'video/edit',
                  alias: '',
                  redirect: '',
                  component: '',
                  meta: {
                    menuAuth: true,
                    menuShow: true,
                    menuTitle: '修改视频',
                    menuIcon: '',
                    buttonAuth: []
                  }
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

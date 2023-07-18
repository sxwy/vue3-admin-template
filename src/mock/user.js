/* eslint-disable @typescript-eslint/no-var-requires */

const MockJs = require('mockjs')

module.exports = {
  /** 登录 */
  'POST /base/api/login/v1.0': (req, res) => {
    setTimeout(() => {
      if (req.body.account === 'admin' && req.body.password === '123456') {
        const data = MockJs.mock({
          code: '10000',
          message: '登录成功',
          body: {
            token: Date.now()
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
        message: '获取 token 成功',
        body: {
          token: Date.now()
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
        message: '获取用户信息成功',
        body: {
          id: '@id',
          name: '@cname',
          avatar: '@image(50x50)',
          permission: []
        }
      })
      return res.json(data)
    }, 500)
  }
}

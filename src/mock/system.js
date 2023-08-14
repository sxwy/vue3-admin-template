/* eslint-disable @typescript-eslint/no-var-requires */

const MockJs = require('mockjs')

module.exports = {
  /** 获取角色列表 */
  'POST /base/api/getRoleList/v1.0': (req, res) => {
    setTimeout(() => {
      const list = []
      for (let index = 0; index < 23; index++) {
        list.push({
          name: `名称${index}`,
          state: index % 2 === 0 ? 1 : 0
        })
      }
      const data = MockJs.mock({
        code: '10000',
        message: 'ok',
        body: {
          totalCount: list.length,
          list
        }
      })
      return res.json(data)
    }, 500)
  }
}

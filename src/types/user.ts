/** 登录参数 */
export interface LoginQuery {
  /** 账号 */
  account: string
  /** 密码 */
  password: string
}

/** 会话信息 */
export interface Session {
  /** token */
  token: string
}

/** 路由 */
interface Route {
  /** 路由名称 */
  name: string
  /** 路由地址 */
  path: string
  /** 路由别名 */
  alias: string
  /** 重定向路由地址 */
  redirect: string
  /** 组件路径 */
  components: string
  /** 元信息 */
  meta: {
    /** 菜单是否有权限 */
    menuAuth: boolean
    /** 菜单是否展示 */
    menuShow: boolean
    /** 菜单标题 */
    menuTitle: string
    /** 菜单图标 */
    menuIcon: string
    /** 当前路由中的按钮权限 */
    buttonAuth: string[]
  }
  /** 子集路由 */
  children: Route[]
}

/** 用户信息 */
export interface User {
  /** id */
  id: string
  /** 头像 */
  avatar: string
  /** 名称 */
  name: string
  /** 路由 */
  routes: Route[]
}

import path from 'path-browserify'
import type {
  RouteRecordNormalized,
  RouteRecordRaw,
  RouteRecordName
} from 'vue-router'

/** 递归查询是否有相同的路由名称 */
const findRouteName = (
  routes: RouteRecordRaw[] | RouteRecordNormalized[],
  routeName: RouteRecordName
): boolean => {
  return routes.some((item) => {
    if (item.name === routeName) {
      return true
    } else {
      if (item.children?.length) {
        return findRouteName(item.children, routeName)
      } else {
        return false
      }
    }
  })
}

/** 过滤路由表 */
export const filterRouters = (routes: RouteRecordNormalized[]) => {
  return routes.filter((item, index) => {
    // 1、过滤没有 name 字段的路由（基础路由或异常路由）
    if (!item.name) {
      return false
    }
    // 2、过滤脱离层级的路由
    const residueRoutes = routes.slice(index + 1)
    return !findRouteName(residueRoutes, item.name)
  })
}

/** 生成路由表 */
export const generateMenus = (
  routes: RouteRecordRaw[] | RouteRecordNormalized[],
  basePath = ''
) => {
  const result: RouteRecordNormalized[] = []
  routes.forEach((item) => {
    // 合并层级 path
    const routePath = path.resolve(basePath, item.path)
    const route: RouteRecordRaw | RouteRecordNormalized = {
      ...item,
      path: routePath,
      children: [] as RouteRecordRaw[]
    }
    // 判断是否在菜单展示
    if (route.meta?.menuShow) {
      result.push(route as RouteRecordNormalized)
    }
    // 递归处理子集
    if (item.children?.length) {
      route.children!.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}

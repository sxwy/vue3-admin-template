import path from 'path-browserify'
import type {
  RouteRecordNormalized,
  RouteRecordRaw,
  RouteRecordName
} from 'vue-router'

/**
 * 递归查询是否有相同的路由名称
 * @param routes 路由信息
 * @param routeName 当前匹配的路由名称
 * @returns 返回是否有匹配的路由
 */
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

/**
 * 过滤路由表
 * @param routes 路由信息
 * @returns 返回过滤后的路由信息
 */
export const filterRoutes = (routes: RouteRecordNormalized[]) => {
  return routes.filter((item, index) => {
    // 1. 过滤没有 name 字段的路由（基础路由或异常路由）
    if (!item.name) {
      return false
    }
    // 2. 过滤脱离层级的子路由，因为 getRoutes 方法会把所有路由（父级包含子级的结构、子级单独的结构）都获取出来
    // 所以需要把子级去掉，只保留有层级的路由数据
    const residueRoutes = routes.slice(index + 1)
    return !findRouteName(residueRoutes, item.name)
  })
}

/**
 * 生成菜单
 * @param routes 路由信息
 * @param basePath 基础路由
 * @returns 返回处理后的路由信息
 */
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
      path: routePath, // 因为路由是有层级关系的，子级路由需要拼接上父级路由，才是一个正常的 path
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

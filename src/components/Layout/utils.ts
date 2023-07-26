import path from 'path-browserify'
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

/** 查询是否有相同的路由名称 */
const findRouteName = (
  routes: RouteRecordRaw[] | RouteRecordNormalized[],
  routeName: string
): boolean => {
  return routes.some((item) => {
    if (routeName) {
      if (item.name === routeName) {
        return true
      } else {
        if (item.children?.length) {
          return findRouteName(item.children, routeName)
        } else {
          return false
        }
      }
    } else {
      return false
    }
  })
}

/** 过滤路由表 */
export const filterRouters = (routes: RouteRecordNormalized[]) => {
  const result = routes.filter((item, index) => {
    const residueRoutes = routes.slice(index + 1)
    return !findRouteName(residueRoutes, item.name as string)
  })
  console.log(
    '%c result==========>',
    'color: #4FC08D; font-weight: bold',
    result
  )
  return result
}

/** 生成路由表 */
export const generateMenus = (
  routes: RouteRecordRaw[] | RouteRecordNormalized[],
  basePath = ''
) => {
  const result: any[] = []

  routes.forEach((item) => {
    // if (item.path === '/' && item.children?.length) {
    //   console.log(
    //     '%c item==========>',
    //     'color: #4FC08D; font-weight: bold',
    //     item
    //   )
    //   result.push(...generateMenus(item.children, item.path))
    //   return
    // }

    const routePath = path.resolve(basePath, item.path)

    let route = result.find((item) => item.path === routePath)

    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.routePermission && route.meta.menuShow) {
        result.push(route)
      }
    }

    if (item.children?.length) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })

  return result
}

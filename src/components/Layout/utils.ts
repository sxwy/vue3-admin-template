import path from 'path-browserify'
import { type RouteRecordNormalized } from 'vue-router'

const getPathPrefix = (path: string) => {
  const lastIndex = path.lastIndexOf('/')
  return path.substring(0, lastIndex)
}

export const filterRouters = (routes: RouteRecordNormalized[]) => {
  const filterList = routes.filter((filterItem) => {
    const prefix = getPathPrefix(filterItem.path)
    return !routes.filter((someItem) => someItem.path === prefix).length
  })

  const arr = ['/login', '/404', '/403', '/']

  return filterList.filter((item) => {
    if (arr.includes(item.path)) {
      return false
    } else {
      return true
    }
  })
}

export const generateMenus = (routes: any[], basePath = '') => {
  const result: any[] = []

  routes.forEach((item) => {
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

    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })

  return result
}

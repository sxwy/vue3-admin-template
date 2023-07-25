import path from 'path-browserify'
import { type RouteRecordNormalized } from 'vue-router'

const getPathPrefix = (path: string) => {
  const lastIndex = path.lastIndexOf('/')
  return path.substring(0, lastIndex)
}

const getName = (routes: any[], name: string): boolean => {
  return routes.some((item) => {
    if (item.name === name) {
      return true
    } else {
      if (item.children?.length) {
        return getName(item.children, name)
      } else {
        return false
      }
    }
  })
}

const getChildrenRoutes = (routes: any[]) => {
  const arr = JSON.parse(JSON.stringify(routes))
  return routes.filter((item, index) => {
    const list = arr.slice(index + 1, routes.length)
    return !getName(list, item.name)
  })
}

export const filterRouters = (routes: RouteRecordNormalized[]) => {
  const arr = getChildrenRoutes(routes)

  console.log('%c arr==========>', 'color: #4FC08D; font-weight: bold', arr)

  return routes.filter((filterItem) => {
    const prefix = getPathPrefix(filterItem.path)
    return !routes.filter((someItem) => someItem.path === prefix).length
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

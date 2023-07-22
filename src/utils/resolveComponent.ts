import { type RouteComponent } from 'vue-router'

const modules = import.meta.glob('../pages/**/*.vue')

export default (path: string) => {
  return modules[`../pages${path}.vue`] as RouteComponent
}

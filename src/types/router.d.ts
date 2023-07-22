import 'vue-router'
import type { Meta } from './user'

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends Meta {}
}

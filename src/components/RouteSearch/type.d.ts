import RouteSearch from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    RouteSearch: typeof RouteSearch
  }
}

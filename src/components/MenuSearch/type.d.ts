import MenuSearch from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MenuSearch: typeof MenuSearch
  }
}

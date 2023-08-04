import Breadcrumb from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Breadcrumb: typeof Breadcrumb
  }
}

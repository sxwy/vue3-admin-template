import CLayout from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CLayout: typeof CLayout
  }
}

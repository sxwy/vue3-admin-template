import Layout from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Layout: typeof Layout
  }
}

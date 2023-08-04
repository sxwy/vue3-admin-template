import Hamburger from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Hamburger: typeof Hamburger
  }
}

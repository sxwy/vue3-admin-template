import ThemeChange from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ThemeChange: typeof ThemeChange
  }
}

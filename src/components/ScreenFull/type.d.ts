import ScreenFull from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ScreenFull: typeof ScreenFull
  }
}

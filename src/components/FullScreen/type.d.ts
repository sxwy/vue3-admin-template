import FullScreen from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    FullScreen: typeof FullScreen
  }
}

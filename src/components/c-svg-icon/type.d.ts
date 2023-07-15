import CSvgIcon from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CSvgIcon: typeof CSvgIcon
  }
}

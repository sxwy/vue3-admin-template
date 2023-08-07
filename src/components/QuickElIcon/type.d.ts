import QuickElIcon from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QuickElIcon: typeof QuickElIcon
  }
}

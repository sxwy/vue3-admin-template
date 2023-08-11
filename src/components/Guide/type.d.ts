import Guide from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Guide: typeof Guide
  }
}

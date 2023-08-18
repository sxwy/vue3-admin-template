import ListContainer from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ListContainer: typeof ListContainer
  }
}

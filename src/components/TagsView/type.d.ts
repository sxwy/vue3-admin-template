import TagsView from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TagsView: typeof TagsView
  }
}

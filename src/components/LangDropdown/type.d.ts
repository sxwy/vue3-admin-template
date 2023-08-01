import LangDropdown from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LangDropdown: typeof LangDropdown
  }
}

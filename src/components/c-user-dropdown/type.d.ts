import CUserDropdown from './index.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CUserDropdown: typeof CUserDropdown
  }
}

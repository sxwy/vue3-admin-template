import { type App, type Component, defineAsyncComponent } from 'vue'

export default (app: App) => {
  const modules = import.meta.glob('./*/index.vue')
  for (const path in modules) {
    const reg = /\/([^/]+)\//
    const match = path.match(reg)
    const componentName = match![1]
    const componentContent = modules[path] as () => Promise<Component>
    app.component(componentName, defineAsyncComponent(componentContent))
  }
}

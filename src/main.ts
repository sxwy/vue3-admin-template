import './polyfills'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Components from './components'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Components)
app.use(ElementPlus)

app.mount('#app')

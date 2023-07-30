import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(store).use(router).use(i18n).use(ElementPlus).mount('#app')

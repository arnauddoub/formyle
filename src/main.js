import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

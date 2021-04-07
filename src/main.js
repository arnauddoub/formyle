import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from './router'
import store from './store'
import Maska from 'maska'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Maska)
app.mount('#app')

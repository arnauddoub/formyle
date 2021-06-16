import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Formyle from '@/index'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Formyle)
app.mount('#app')

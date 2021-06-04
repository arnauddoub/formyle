import { createApp } from 'vue'
import App from './App.vue'
import Formyle from './index'

const app = createApp(App)

app.use(Formyle)
app.mount('#app')

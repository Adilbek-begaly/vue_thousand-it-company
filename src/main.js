import { createApp } from 'vue'
import App from './App'
import router from './components/router/router'


const app = createApp(App)


app.use(router)
app.mount('#app')

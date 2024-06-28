import '../assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store);

// app.component('my-button', MyButton)

app.mount('#app')

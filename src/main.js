import '../assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyButton from './components/UI/MyButton.vue'

const app = createApp(App)

app.use(store);

app.component('my-button', MyButton)

app.mount('#app')

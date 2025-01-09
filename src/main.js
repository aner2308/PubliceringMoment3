import './assets/main.css'

//Länkar funktioner från andra components och views för användning.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Skapar ny Vue applikation
const app = createApp(App)

//Ger applikationen stöd för routing
app.use(router)

//Lägger in vue-applikationen på ett element med id "app". (i index.html)
app.mount('#app')

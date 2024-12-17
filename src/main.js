import './assets/output.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//import express from 'express'
import cors from 'cors'
//const app = express()

const app = createApp(App)
//app.use(cors())
app.use(createPinia())
app.use(router)
app.mount('#app')
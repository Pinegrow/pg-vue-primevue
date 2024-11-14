import '@/assets/css/main.css'
import 'uno.css'

import { createApp } from 'vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)
app.use(primeVuePlugin, primeVueConfig)

app.mount('#app')

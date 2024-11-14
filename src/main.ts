// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import '@/assets/css/main.css'
import 'uno.css'

import { createApp } from 'vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(head)

app.mount('#app')

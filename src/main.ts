import '@/assets/css/main.css'
import 'uno.css'

import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

import { ViteSSG } from 'vite-ssg'
import App from '@/App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(primeVuePlugin, primeVueConfig)
    app.use(pinia)
    if (import.meta.env.SSR) initialState.pinia = pinia.state.value
    else pinia.state.value = initialState.pinia || {}

    // router.beforeEach((to, from, next) => {
    //   const store = useRootStore(pinia)
    //   if (!store.ready)
    //     // perform the (user-implemented) store action to fill the store's state
    //     store.initialize()
    //   next()
    // })
  },
)

// @ts-ignore
/* Remove vue-router import (if it exists) */
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  // You don't need to manually add the routes anymore,
  // the plugin writes it for you
  extendRoutes: (routes) => setupLayouts(routes),
})

export default router

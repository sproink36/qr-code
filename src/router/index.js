import * as VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '../views/Main.vue'

const routes = [
  { path: '/', name: 'main', component: Main }
]

const router = VueRouter.createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

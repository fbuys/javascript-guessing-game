// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto' // Polyfill ie11

import Vue, { createApp } from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import store from './store'

import App from './App'
import Game from './components/Game'
import Ranking from './components/Ranking'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: Game
      },
      {
        path: 'ranking',
        component: Ranking
      }
    ]
  }
]

const router = new VueRouter({
  routes // short for routes: routes
})

sync(store, router)

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// hide loading
document.querySelector('.loading-container').style.display = 'none'

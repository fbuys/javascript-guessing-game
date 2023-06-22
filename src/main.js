// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto' // Polyfill ie11

import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
// import { sync } from 'vuex-router-sync'

import store from './store'

import App from './App'
import Game from './components/Game'
import Ranking from './components/Ranking'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: Game
      },
      {
        path: 'ranking',
        component: Ranking
      }
    ]
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes // short for routes: routes
})

// sync(store, router)

// configureCompat({ })

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#v-guessing-game')

// hide loading
// document.querySelector('.loading-container').style.display = 'none'

import { createStore } from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import app from './modules/app'
import user from './modules/user'
import sound from './modules/sound'

// Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  // actions,
  // getters,
  modules: {
    app,
    user,
    sound
  },
  strict: false
})

export default store

import { createStore, createLogger } from 'vuex'
import steps from './modules/steps'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    steps,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

import { createStore, createLogger } from 'vuex'
import steps from './modules/steps'
import quote from './modules/quote'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    steps,
    quote,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

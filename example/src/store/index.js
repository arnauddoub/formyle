import { createStore, createLogger } from 'vuex'
import quote from './modules/quote'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    quote,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

// initial state
const state = () => ({
  all: [],
  version: null,
  currentIndex: null,
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  addSteps(state, item) {
    state.all = item
  },
  addVersion(state, item) {
    state.version = item
  },
  changeCurrentIndex(state, item) {
    state.currentIndex = item
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

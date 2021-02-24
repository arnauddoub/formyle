// initial state
const state = () => ({
  all: [],
  version: null,
  stepIndex: null,
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
  changeStepIndex(state, item) {
    state.stepIndex = item
  },
  changeStepIndexByRoute(state, route) {
    const index = state.all.findIndex((element) => state.version + element.name === route)
    state.stepIndex = index > -1 ? index : 0
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

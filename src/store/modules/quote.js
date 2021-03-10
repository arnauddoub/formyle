import { getField, updateField } from 'vuex-map-fields'

// initial state
const state = () => ({
  witchPet: null,
  phone: null,
  email: null,
  tests: [
    {
      email: null,
      address: null,
    },
  ],
})

// getters
const getters = {
  getField,
}

// actions
const actions = {}

// mutations
const mutations = {
  updateField,
  addTestsRow(state) {
    state.tests.push({
      email: null,
      address: null,
    })
  },
  removeTestsRow(state, index) {
    state.tests.splice(index, 1)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

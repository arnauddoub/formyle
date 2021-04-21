import { getField, updateField } from 'vuex-map-fields'

// initial state
const state = () => ({
  pet: {
    whichPet: null,
    breed: null,
    name: null,
    yearsOld: null,
    gender: null,
    identified: null,
  },
  customer: {
    lastName: null,
    firstName: null,
    birthDate: '',
    email: null,
  },
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

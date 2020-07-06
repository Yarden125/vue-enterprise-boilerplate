import axios from 'axios'
// State managment module for fetched users from given public API

// The module state
const state = {
  newUsers: [],
}

// Getting values from state
const getters = {
  allNewUsers: (state) => state.newUsers,
}

// Actions are called from the component
const actions = {
  // fetching the data from API
  fetchNewUsers({ commit }) {
    return axios
      .get('https://reqres.in/api/users?page=2')
      .then((response) => {
        // commit a mutation
        commit('setNewUsers', response.data.data)
      })
      .catch((err) => {console.log(err.message)})
  },
}

// Mutating the state
const mutations = {
  setNewUsers: (state, newUsers) => {
    state.newUsers = newUsers
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}

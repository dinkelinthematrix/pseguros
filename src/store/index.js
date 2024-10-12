import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post('http://localhost:3000/login', credentials).then(({ data }) => {
        commit('setUserData', data)
      })
    }
  }
})

export default store

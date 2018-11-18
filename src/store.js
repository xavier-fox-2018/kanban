import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialogOpen: false,
    detailDialogOpen: false,
    laneName: ['Back-log', 'To-do', 'On-progress', 'Finished'],
    cardDetails: {}
  },
  mutations: {
    closeDialog (state) {
      state.dialogOpen = false
    },
    openDialog (state) {
      state.dialogOpen = true
    },
    changeDetails (state, payload) {
      state.cardDetails = payload
    },
    openDetailsDialog (state) {
      state.detailDialogOpen = true
    },
    closeDetailsDialog (state) {
      state.detailDialogOpen = false
    },
    moveStatusLeft (state) {
      state.cardDetails.status -= 1
    },
    moveStatusRight (state) {
      state.cardDetails.status += 1
    }
  },
  actions: {
    closeDialog ({ commit }) {
      commit('closeDialog')
    },
    openDialog ({ commit }) {
      commit('openDialog')
    },
    closeDetailsDialog ({ commit }) {
      commit('closeDetailsDialog')
    },
    openDetailsDialog ({ commit }) {
      commit('openDetailsDialog')
    },
    changeDetails ({ commit }, payload) {
      commit('changeDetails', payload)
    },
    moveStatusRight ({ commit }) {
      commit('moveStatusRight')
    },
    moveStatusLeft ({ commit }) {
      commit('moveStatusLeft')
    }
  }
})

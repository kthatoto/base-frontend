export default {
  signin ({ commit }, user) {
    commit('setUserToken', user.qa)
  },
  signout ({ commit }) {
    commit('setUserToken', null)
  }
}

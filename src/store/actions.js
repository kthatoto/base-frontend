export default {
  signin ({ commit }, user) {
    commit('setUser', { uid: user.uid, email: user.email })
  },
  signout ({ commit }) {
    commit('setUser', { uid: null, email: null })
  }
}

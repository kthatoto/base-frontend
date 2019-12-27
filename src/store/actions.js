export default {
  signin ({ commit }, user) {
    commit('setUser', { uid: user.uid, email: user.email, emailVerified: user.emailVerified })
  },
  signout ({ commit }) {
    commit('setUser', { uid: null, email: null, emailVerified: null })
  }
}

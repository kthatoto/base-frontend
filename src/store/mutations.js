export default {
  setUser (state, user) {
    state.user.uid = user.uid
    state.user.email = user.email
  }
}

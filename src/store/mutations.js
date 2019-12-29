export default {
  setUser (state, user) {
    state.user.uid = user.uid
    state.user.email = user.email
    state.user.emailVerified = user.emailVerified
    state.user.jwt = user.jwt
    localStorage.jwt = user.jwt
  }
}

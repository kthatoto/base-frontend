export default (context) => {
  context.app.firebase.auth().onAuthStateChanged((user) => {
    console.log(user)
  })
}

export default (context) => {
  console.log(context.app)
  // return new Promise((resolve, reject) => {
  //   context.app.firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       resolve(user)
  //     } else {
  //       context.app.$message({ message: 'Please signin', type: 'danger', duration: 5000 })
  //       context.redirect('/signin')
  //     }
  //   })
  // })
}

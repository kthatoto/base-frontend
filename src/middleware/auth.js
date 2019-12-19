export default ({ app, store, redirect }) => {
  if (!store.state.user.uid) {
    app.$message({ message: 'Please signin', type: 'warning', duration: 5000 })
    return redirect('/signin')
  }
}

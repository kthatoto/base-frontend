export default ({ app, store, redirect }) => {
  if (store.state.user.uid) {
    return redirect('/')
  }
}

export default (context) => {
  context.app.apiClient('get', '/check').then((res) => {
    if (res.status !== 200) {
      context.redirect('/signin')
    }
  })
}

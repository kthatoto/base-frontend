export default (context) => {
  context.app.apiClient('get', '/check').then((res) => {
    if (res.data === 200) {
      context.redirect('/')
    }
  })
}

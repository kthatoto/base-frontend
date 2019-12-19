import axios from 'axios'

const apiClient = (method, url, data = null) => {
  return axios({
    method,
    url: process.env.serverUrl + url,
    data,
    headers: { Authorization: localStorage.queyToken }
  }).catch((err) => { return err.response })
}
export default ({ app }, inject) => { inject('apiClient', apiClient) }

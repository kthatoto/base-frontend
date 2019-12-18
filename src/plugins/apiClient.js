import Vue from 'vue'
import axios from 'axios'

const apiClient = (method, url, data = null) => {
  return axios({
    method,
    url: process.env.serverUrl + url,
    data,
    headers: { Authorization: localStorage.queyToken }
  }).catch((err) => { return err.response })
}

Vue.prototype.$apiClient = apiClient
export default ({ app }, inject) => { app.apiClient = apiClient }

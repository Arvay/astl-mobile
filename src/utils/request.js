import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    let result = response.data
    if (result.code !== 0) {
      return Promise.reject(result)
    } else {
      return result
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

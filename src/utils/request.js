import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: 'http://47.94.146.245:11010/',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor

service.interceptors.response.use(
  response => {
    let result = response.data
    return result
  },
  error => {
    return error
  }
)

export default service

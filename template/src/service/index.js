import axios from 'axios'
// import qs from 'qs'
import config from './config'

const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  config => {
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

export default {
  post (url, data) {
    console.log('post request url', url)
    return service({
      method: 'post',
      url,
      params: data
    })
  },
  get (url, data) {
    console.log('get request url', url)
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  delete (url, data) {
    console.log('delete request url', url)
    return service({
      methods: 'delete',
      url,
      params: data
    })
  }
}

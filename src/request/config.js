import qs from 'qs'
import { Message } from 'element-ui'
import { BASE_URL } from './uri'
const [ERROR_MSG_500, ERROR_MSG_401] = ['服务器内部错误', '登录超时，请重新登录']
export const setToken = config => {
  if (!!JSON.parse(sessionStorage.getItem('userinfo'))) {
    config.headers.Authorization = JSON.parse(sessionStorage.getItem('userinfo')).token
  }
  return config
}
export const errorFn = err => {
  if (status == 500) {
    Message.error(ERROR_MSG_500)
    router.push('/')
  }
  if (status == 401) {
    Message.error(ERROR_MSG_401)
    router.push('/')
  }
}
export const baseConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  transformRequest: [
    data => qs.stringify(data)
  ],
  paramsSerializer: params => qs.stringify(params),
  timeout: 10000
}

import axios from "axios"

import store from '@/store'
import { setToken, errorFn, baseConfig } from './config'
import { Message } from 'element-ui'

const post = (_url, obj) => axios.post(_url, obj, baseConfig).catch(errorFn)
//rest符
const get = (_url, obj) => axios(_url, { ...baseConfig, params: obj }).catch(errorFn)
axios.interceptors.request.use(setToken)

//登入登出
export const signIn = data => post("sign_in", data).then(d => {
  if (d.data.code == 401) {
    Message.error(d.data.msg)
  } else {
    //dispatch调用vuex的actions方法 修改用户信息
    store.dispatch('changeUserInfo', d.data);
  }
  return d
})
export const signOut = _ => post("sign_out").then(d => {
  store.dispatch('changeUserInfo', {});
  // 也可以直接用commit调用vuex的mutations方法 store.commit('CHANGE_USER_INFO', {})
})

//医院应用
export const getHospitalList = data => get("auth/hospitals", {
  page: data ? data.data : 1,
  size: data ? data.size : 10
})
import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from "./getters";
import * as actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex)

const state = {
  testdata: {
    msg: 'test',
    cn: '测试'
  },
  userinfo: JSON.parse(sessionStorage.userinfo) || {}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
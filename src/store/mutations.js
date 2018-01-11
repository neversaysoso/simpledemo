import * as type from "./mutation_type";

export default {
  [type.CHANGE_USER_INFO](state, payload) {
    sessionStorage.setItem("userinfo", JSON.stringify(payload));
    state.userinfo = payload
  },
  [type.CHANGE_USER_NAME](state, realname) {
    const olduser = JSON.parse(sessionStorage.getItem('userinfo'))
    sessionStorage.setItem("userinfo", JSON.stringify(
      Object.assign(olduser, {
        realname
      })
    ));
    state.userinfo.realname = realname
  }
}
import * as type from "./mutation_type";

export const changeUserInfo = ({ commit }, obj) => {
  commit(type.CHANGE_USER_INFO, obj)
}

export const changeUserName = ({ commit }, name) => {
  commit(type.CHANGE_USER_NAME, name)
}
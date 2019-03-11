import {RECEIVE_HOME_LIST} from '../mutations-type'
import {reqHomeList} from '../../api/index'

const state = {
  homelist:{},
}
const mutations = {
  [RECEIVE_HOME_LIST] (state,homelist) {
    state.homelist = homelist
  },
}
const actions = {
  async getHomeList ({commit}) {
    const result = await reqHomeList()
    if(result.code === 0) {
      commit(RECEIVE_HOME_LIST,result.data)
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}

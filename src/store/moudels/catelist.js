import {RECEIVE_CATE_LIST} from '../mutations-type'
import {reqCateList} from '../../api/index'

const state = {
  cateList:{},
}
const mutations = {
  [RECEIVE_CATE_LIST] (state,cateList) {
    state.cateList = cateList
  },
}
const actions = {
  async getCateList ({commit},callback) {
    const result = await reqCateList()
    if(result.code === 0) {
      commit(RECEIVE_CATE_LIST,result.data)
      typeof callback === 'function' && callback()
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

import {RECEIVE_SEARCH_DATA} from '../mutations-type'
import {reqSearchData} from '../../api/index'

const state = {
  searchdata:{},
}
const mutations = {
  [RECEIVE_SEARCH_DATA] (state,searchdata) {
    state.searchdata = searchdata
  },
}
const actions = {
  async getSearchData ({commit}) {
    const result = await reqSearchData()
    console.log('sear',result)
    if(result.code === 0) {
      commit(RECEIVE_SEARCH_DATA,result.data)
      console.log('com',result.data)
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

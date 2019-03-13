import {RECEIVE_SEARCH_DATA,RECEIVE_SEARCH_KEYWORD_DATA} from '../mutations-type'
import {reqSearchData,reqSearch} from '../../api/index'

const state = {
  searchdata:{},
  searchKeyWord:[], //输入关键字返回对应搜索结果
}
const mutations = {
  [RECEIVE_SEARCH_DATA] (state,searchdata) {
    state.searchdata = searchdata
  },
  [RECEIVE_SEARCH_KEYWORD_DATA] (state,searchKeyWord) {
    state.searchKeyWord = searchKeyWord
  },
}
const actions = {
  async getSearchData ({commit}) {
    const result = await reqSearchData()
    // console.log('sear',result)
    if(result.code === 0) {
      commit(RECEIVE_SEARCH_DATA,result.data)
      // console.log('com',result.data)
    }
  },
  async getSearch ({commit},{searchName}) {
    const result = await reqSearch(searchName)
    console.log('sear',result);
    if(result.code === 200) {
      commit(RECEIVE_SEARCH_KEYWORD_DATA,result.data)
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

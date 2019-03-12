import {RECEIVE_TABS,RECEIVE_RECOMMENT_DATA,RECEIVE_AUTO_RECOMMENT_DATA} from '../mutations-type'
import {reqTabs,reqRecommentData,reqAutoRecommentData} from '../../api/index'

const state = {
  topicTab:[], //识物顶部tab数据
  RecommentData:[], //推荐显示的数据
  AutoRecommentData:{ //推荐下拉加载的数据
    hasMore:false, //初始没有数据为false
    result:[],
  }
}
const mutations = {
  [RECEIVE_TABS] (state,topicTab) {
    state.topicTab = topicTab
  },
  [RECEIVE_RECOMMENT_DATA] (state,RecommentData) {
    state.RecommentData = RecommentData
  },
  [RECEIVE_AUTO_RECOMMENT_DATA] (state,AutoRecommentData) {
    if(!state.AutoRecommentData.hasMore) {
      state.AutoRecommentData = AutoRecommentData
    }else if(state.AutoRecommentData.hasMore) {
      // state.AutoRecommentData.result = AutoRecommentData.result
      state.AutoRecommentData.result.push(...AutoRecommentData.result)
    }

  },
}
const actions = {
  async getTabs ({commit}) {
    const result = await reqTabs()
    console.log('tab',result)
    if(result.code === '200') {
      commit(RECEIVE_TABS,result.data)
    }
  },
  async getRecommentData ({commit}) {
    const result = await reqRecommentData()
    if(result.code === '200') {
      commit(RECEIVE_RECOMMENT_DATA,result.data)
    }
  },
  async getAutoRecommentData ({commit},{page,size}) {
    const result = await reqAutoRecommentData(page,size)
    if(result.code === '200') {
      commit(RECEIVE_AUTO_RECOMMENT_DATA,result.data)
    }
  },
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}

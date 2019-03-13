import {RECEIVE_TABS,RECEIVE_RECOMMENT_DATA,RECEIVE_AUTO_RECOMMENT_DATA,RECEIVE_COLLECTION_IMGS,RECEIVE_BUYER_SHOW_LIST} from '../mutations-type'
import {reqTabs,reqRecommentData,reqAutoRecommentData,reqCollectionImgs,reqBuyerShowList} from '../../api/index'

const state = {
  topicTab:[], //识物顶部tab数据
  RecommentData:[], //推荐显示的数据
  AutoRecommentData:{ //推荐下拉加载的数据
    hasMore:false, //初始没有数据为false
    result:[],
  },
  CollectionImgs:{}, //晒单页面上部轮播的图片
  BuyerShowList:{
    hasMore:false, //初始没有数据为false
    type:1,
    topicList:[],
  },
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
  [RECEIVE_COLLECTION_IMGS] (state,CollectionImgs) {
    state.CollectionImgs = CollectionImgs
  },
  [RECEIVE_BUYER_SHOW_LIST] (state,BuyerShowList) {
    if (!state.BuyerShowList.hasMore) {
      state.BuyerShowList = BuyerShowList
    } else if (state.BuyerShowList.hasMore) {
      if(state.BuyerShowList.type === BuyerShowList.type) {
        state.BuyerShowList.topicList.push(...BuyerShowList.topicList)
      }else {
        state.BuyerShowList = BuyerShowList
      }
    }
  }
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
  async getCollectionImgs ({commit},{id}) {
    const result = await reqCollectionImgs(id)
    if(result.code === '200') {
      commit(RECEIVE_COLLECTION_IMGS,result.data)
    }
  },
  async getBuyerShowList ({commit},{page,size,type}) {
    const result = await reqBuyerShowList(page,size,type)
    if(result.code === '200') {
      result.data.type = type
      commit(RECEIVE_BUYER_SHOW_LIST,result.data)
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

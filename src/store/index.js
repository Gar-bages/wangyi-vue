import Vue from 'vue'
import Vuex from 'vuex'

import home from './moudels/home'
import search from './moudels/search'
import cateList from './moudels/catelist'
import topic from './moudels/topic'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules:{
    home,
    search,
    cateList,
    topic,
  }

})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import './mock/mockServer' //mockServer.js 会被打包执行一次
import VueLazyLoad from 'vue-lazyload'
import loading from './common/img/loading.gif'
import {Button} from 'mint-ui'

import Split from './components/Split/Split.vue'
import LoginHeader from './components/LoginHeader/LoginHeader.vue'

Vue.config.productionTip = false

Vue.component('Split',Split)
Vue.component('LoginHeader',LoginHeader)
Vue.component(Button.name,Button)

Vue.use(VueLazyLoad,{
  loading,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
  render: h => h(App),
  router,
  store
})

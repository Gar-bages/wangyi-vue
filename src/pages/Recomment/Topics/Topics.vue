<template>
  <div class="All">
    <!--推荐-->
    <div class="advise" v-show="tabId === 9">
      <ul v-for="(item,index) in RecommentData" :key="index">
        <li v-for="(topic,index) in item.topics" :key="index">
          <XuanMei v-if="topic.style===1" :topic="topic"/>
          <Group v-if="topic.style===2" :topic="topic"/>
          <Split/>
        </li>
      </ul>
      <ul v-for="(AutoRecomment,index) in AutoRecommentData.result" :key="index + '-la'">
        <li v-for="(topic,index) in AutoRecomment.topics" :key="index">
          <XuanMei v-if="topic.style===1" :topic="topic"/>
          <Group v-if="topic.style===2" :topic="topic"/>
          <ShopList v-if="topic.style===3" :topic="topic"/>
          <PhotoWall v-if="topic.style===4" :topic="topic"/>
          <Split/>
        </li>
        <BuyersShow v-if="AutoRecomment.look" :look="AutoRecomment.look"/>
      </ul>
    </div>
    <!--收纳-->
    <div class="accepts" v-show="tabId === 10">
      收纳
    </div>
    <!--20元好物-->
    <div class="goods" v-show="tabId === 12">
      20元好物
    </div>
    <!--晒单-->
    <div class="Bask" v-show="tabId === 7">
      晒单
    </div>
    <!--达人-->
    <div class="expert" v-show="tabId === 4">
      达人
    </div>
    <!--HOME-->
    <div class="home" v-show="tabId === 6">
      HOME
    </div>

    <div class="foot">

    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'

  import XuanMei from '../../../components/XuanMei/XuanMei.vue'
  import Group from '../../../components/Group/Group.vue'
  import ShopList from '../../../components/ShopList/ShopList.vue'
  import BuyersShow from '../../../components/BuyersShow/BuyersShow.vue'
  import PhotoWall from '../../../components/PhotoWall/PhotoWall.vue'

  export default {
    mounted () {
      this.$store.dispatch('getRecommentData')
      this.$store.dispatch('getAutoRecommentData',{page :1,size:5})
    },
    computed: {
      ...mapState({
        RecommentData: state => state.topic.RecommentData,
        AutoRecommentData:state => state.topic.AutoRecommentData
      }),
      //得到tabId
      tabId () {
        if(this.$route.params.id==='0') return 9
        else if(this.$route.params.id==='1') return 10
        else if(this.$route.params.id==='2') return 12
        else if(this.$route.params.id==='3') return 7
        else if(this.$route.params.id==='4') return 4
        else if(this.$route.params.id==='5') return 6
      }
    },
    components: {
      XuanMei,
      Group,
      ShopList,
      BuyersShow,
      PhotoWall,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .All
    width 100%
    overflow hidden
    .foot
      width 100%
      height 100px


</style>

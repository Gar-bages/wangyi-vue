<template>
  <div class="All">
    <!--推荐-->
    <div :class="{tabWrapper:$route.path==='/recomment/topics/0'}" >
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
    </div>
    <!--收纳-->
    <div class="accepts" v-if="tabId === 10">
      收纳
    </div>
    <!--20元好物-->
    <div class="goods" v-if="tabId === 12">
      20元好物
    </div>
    <!--晒单-->

    <div class="Bask" v-show="tabId === 7">
      <div class="carousel">
        <div class="title">让生活更好的N种方法</div>
        <div class="desc">{{CollectionImgs.title}}</div>
        <div class="scroll-wrapper">
          <ul class="scrolls">
            <li class="scroll" v-for="(CollectionImg,index) in CollectionImgs.lookList" :key="index">
              <img v-lazy="CollectionImg.banner.picUrl" alt="">
            </li>
          </ul>
        </div>
      </div>
        <Split/>
        <div class="contentWrapper">
        <div class="contentTitle">TA们的严选生活</div>
        <div class="toggle">
          <div class="toggleButton" :class="{active:type===1}" @click="changeType(1)">最新</div>
          <div class="toggleButton" :class="{active:type===2}" @click="changeType(2)">本月最热</div>
          <div class="toggleButton" :class="{active:type===3}" @click="changeType(3)">晒单合辑</div>
        </div>
        <div class="showData">
          <ul class="showImgs">
            <li class="showImg" v-for="(topic,index) in BuyerShowList.topicList" :key="index" v-if="index%2===0" >
              <BuyerShowOne :topic="topic" v-if="!topic.isCollection"/>
              <BuyerShowTwo :topic="topic" v-if="topic.isCollection" />
            </li>
          </ul>
          <ul class="showImgs">
            <li class="showImg" v-for="(topic,index) in BuyerShowList.topicList" :key="index +'ha'" v-if="index%2===1">
              <BuyerShowOne :topic="topic" v-if="!topic.isCollection"/>
              <BuyerShowTwo :topic="topic" v-if="topic.isCollection" />
            </li>
          </ul>
        </div>
      </div>
      </div>
    <!--达人-->
    <div class="expert" v-if="tabId === 4">
      达人
    </div>
    <!--HOME-->
    <div class="home" v-if="tabId === 6">
      HOME
    </div>

    <div class="foot"></div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import XuanMei from '../../../components/XuanMei/XuanMei.vue'
  import Group from '../../../components/Group/Group.vue'
  import ShopList from '../../../components/ShopList/ShopList.vue'
  import BuyersShow from '../../../components/BuyersShow/BuyersShow.vue'
  import PhotoWall from '../../../components/PhotoWall/PhotoWall.vue'
  import BuyerShowOne from '../../../components/buyerShowOne/buyerShowOne.vue'
  import BuyerShowTwo from '../../../components/buyerShowTwo/buyerShowTwo.vue'

  export default {
    data () {
      return {
        autoGetPageNum:1,
        type:1, //晒单按钮类型 1.最新  2.本月最热  3.晒单合辑
      }
    },
    methods: {
      changeType (type) {
        this.type = type
      }
    },
    mounted () {
      if(this.tabId === 9) {
        this.$store.dispatch('getRecommentData')
        this.$store.dispatch('getAutoRecommentData',{page :1,size:5})
        this.$nextTick(() => {
          if(!this.AllScroll) {
            this.AllScroll = new BScroll('.tabWrapper',{
              click: true,
              scrollX: false,
              probeType:1,
              pullUpLoad: true, //这个配置用于做上拉加载功能，默认为 false
              bounce:false, //当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
            })
            this.AllScroll.on('pullingUp',() => {
              console.log('上拉加载')
              this.autoGetPageNum ++
              console.log(this.autoGetPageNum)
              if(this.tabId === 9) {
                this.$store.dispatch('getAutoRecommentData',{page :this.autoGetPageNum , size:5})
              }
              this.AllScroll.finishPullUp() //当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
            })
            this.AllScroll.refresh() //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
          }
        })
      }else if(this.tabId === 7) {
        this.$store.dispatch('getCollectionImgs',{id:57})
        this.$store.dispatch('getBuyerShowList',{page:1,size:20,type:this.type})
        new BScroll('.scroll-wrapper',{
          click:true,
          scrollX:true,
        })
      }

    },
    watch: {
      tabId () { //监视tabID变化
        if(this.tabId === 9) {
          this.$store.dispatch('getRecommentData')
          this.$store.dispatch('getAutoRecommentData',{page :1,size:5})
        }else if(this.tabId === 7) {
          this.$store.dispatch('getCollectionImgs',{id:57})
          this.$store.dispatch('getBuyerShowList',{page:1,size:20,type:this.type})
          new BScroll('.scroll-wrapper',{
            click:true,
            scrollX:true,
          })
        }
      },
      type () {
        this.$store.dispatch('getBuyerShowList',{page:1,size:20,type:this.type})
        new BScroll('.scroll-wrapper',{
          click:true,
          scrollX:true,
        })
      }
    },
    computed: {
      ...mapState({
        RecommentData: state => state.topic.RecommentData,
        AutoRecommentData: state => state.topic.AutoRecommentData,
        CollectionImgs: state => state.topic.CollectionImgs,
        BuyerShowList:state => state.topic.BuyerShowList,
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
      BuyerShowOne,
      BuyerShowTwo
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .All
    width 100%
    overflow hidden
    .tabWrapper
      height 1125px
    .Bask
      width 100%
      .carousel
        width 100%
        text-align center
        padding-bottom 30px
        .title
          font-size 28px
          color #7f7f7f
          margin 30px 0
        .desc
          font-size 32px
          color #333
          margin-bottom 30px
        .scroll-wrapper
          width 100%
          overflow hidden
          .scrolls
            display flex
            float left
            .scroll
              float left
              width 240px
              height 240px
              margin 0 10px
              img
                width 240px
                height 240px
                border-radius 10px




      .contentWrapper
        width 100%
        .contentTitle
          text-align center
          width 100%
          font-size 32px
          font-weight bold
          margin 40px 0
          color #333
        .toggle
          width 100%
          display flex
          justify-content space-around
          .toggleButton
            width 170px
            height 60px
            line-height 60px
            background-color #f4f4f4
            border-radius 10px
            text-align center
            font-size 28px
            &.active
              background-color #ffe4af
              color #b0955f
              font-weight bold

        .showData
          margin-top 60px
          display flex
          flex-direction row


    .foot
      width 100%
      height 100px
            /*多列实现瀑布流*/
            /*column-count: 2*/
            /*display flex*/
            /*flex-direction row*/
            /*.showImgs*/
              /*display flex*/
              /*flex-direction column*/
</style>

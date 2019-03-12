<template>
  <div class="home-wrapper">
    <!--头部导航-->
    <header class="headerNav">
      <div class="headerNav-top">
        <h1 class=".logo"></h1>
        <div class="input" @click="$router.push('/search')">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品，共19966款好物</span>
        </div>
        <div class="login" @click="$router.push('/personal')">登录</div>
      </div>

      <div class="nav-wrapper">
        <ul class="nav-list">
          <li class="active">推荐</li>
          <li>居家</li>
          <li>鞋包服饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>推荐</li>
          <li>居家</li>
          <li>鞋包服饰</li>
          <li>服装</li>
          <li>电器</li>
          <li>居家</li>
          <li>鞋包服饰</li>
          <li>服装</li>
          <li>电器</li>
        </ul>
      </div>

      <div class="icon" @click="toggleArrow" :class="{rotate:isShowList}">
        <i class="iconfont icon-fangxiang-xiangxia" ></i>
      </div>

      <div class="quanbu" v-show="isShowList">
        <p class="pindao">全部频道</p>
        <div class="tuijian">
          <ul class="list">
            <li class="color">推荐</li>
            <li>居家</li>
            <li>服装服饰</li>
            <li>特色区</li>
            <li>母婴</li>
            <li>推荐</li>
            <li>推荐</li>
            <li>推荐</li>
            <li>推荐</li>
            <li>推荐</li>
            <li>推荐</li>
          </ul>
        </div>

      </div>

    </header>
    <!--中间内容区-->
    <div class="content">
      <!--遮罩层-->
      <div class="mask" v-if="isShowList"></div>
      <!--轮播图-->
      <div class="swiper-container top-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!--自营图标-->
      <div class="ziying">
        <ul>
          <li>
            <i class="tubiao"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="tubiao tu1"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="tubiao tu2"></i>
            <span>网易自营品牌</span>
          </li>
        </ul>
      </div>
      <!--菜单-->
      <div class="menuList" v-if="homelist.kingKongModule">
        <ul class="list" v-for="(kingKong,index) in homelist.kingKongModule.kingKongList" :key="index">
          <li>
            <img v-lazy="kingKong.picUrl">
            <p>{{kingKong.text}}</p>
          </li>
        </ul>
      </div>
      <!--精选图片-->
      <div class="image">
        <img src="https://yanxuan.nosdn.127.net/15519407811151838.gif?imageView&thumbnail=750x0&quality=75" alt="">

        <img class="kola" src="https://yanxuan.nosdn.127.net/e0e6ac580c822602d83fe42f3e0b4b58.png" alt="">
      </div>
      <!--美食阁-->
      <div class="hot">
        <div class="first li" v-for="(ShoppingGuide,index) in homelist.sceneLightShoppingGuideModule" :key="index">
          <p class="title">{{ShoppingGuide.styleItem.title}}</p>
          <p class="youhui">{{ShoppingGuide.styleItem.desc}}</p>
          <img v-lazy="itemPic.picUrl" alt="" v-for="(itemPic, index) in ShoppingGuide.styleItem.itemPicBeanList"
               :key="index">
        </div>
      </div>
      <Split/>
      <!--私人定制-->
      <div class="private">
        <div class="privateTitle">私人定制</div>
          <div class="swiper-container privateImg">
            <div class="swiper-wrapper" v-if="homelist.personalShop">
              <div class="swiper-slide li" v-for="(pS, index) in personalShopArr" :key="index">
                <div class="privateBlock" v-for="(item, index) in pS" :key="index">
                  <img v-lazy="item.primaryPicUrl" alt="">
                  <span>{{item.name}}
                  <span class="price">￥{{item.counterPrice}}</span>
                </span>

                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>

      <Split/>
      <!--限时购-->
      <div class="timeLimit">
        <div class="limit-title clearfix">
          <span class="limit">限时购</span>

          <div class="time">
            <span class="h">03</span>
            <span class="colon">:</span>
            <span class="h">04</span>
            <span class="colon">:</span>
            <span class="h">05</span>
          </div>

          <span class="more">更多 ></span>
        </div>

        <ul class="timeToBuy-goods clearfix" v-if="homelist.flashSaleModule">
          <li class="timeToBuy-good" v-for="(flashSale,index) in homelist.flashSaleModule.itemList" :key="index">
            <img :src="flashSale.picUrl" alt="">
            <span class="activityPrice">￥{{flashSale.activityPrice}}</span>
            <span class="originPrice">￥{{flashSale.originPrice}}</span>
          </li>
        </ul>
      </div>
      <Split/>
      <!--专题精选-->
      <div class="special clearfix">
        <div class="specialTitle">
          <span class="title">专题精选</span>
          <span class="many">更多 ></span>
        </div>
        <div class="topics-wrapper clearfix">
          <ul class="topics" v-if="homelist.topicList">
            <li class="topic" v-for="(topic,index) in homelist.topicList" :key="index">
              <img :src="topic.itemPicUrl">
              <p class="evaluate">{{topic.title}}</p>
              <p class="des">{{topic.subtitle}}</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <!--底部区域-->
    <footer>
      <div class="down">下载APP</div>
      <div class="pc">电脑版</div>
      <p class="banquan">网易公司版权所有 © 1997 - 2019</p>
      <p class="shipin" >食品经营许可证：JY13301080111719</p>
      <p>妙得ICP证号：ICP 证浙B2-20160106</p>
    </footer>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        isShowList:false,
      }
    },
    async mounted () {

      const list = await this.$store.dispatch('getHomeList')
      console.log('list',list);
      new Swiper ('.top-swiper', {
        loop: true, // 循环模式选项

        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          clickable: true,
          // 自定义分页器
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
      })
      new Swiper ('.privateImg', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      new BScroll('.nav-wrapper',{
        click:true,
        scrollX:true
      })
      new BScroll('.topics-wrapper',{
        click:true,
        scrollX:true
      })
    },
    methods: {
      toggleArrow () {
        this.isShowList = !this.isShowList
      }
    },
    computed: {
      ...mapState({
        homelist: state => state.home.homelist
      }),
      personalShopArr () {
        const {homelist} = this
        const arr = [] //二维数组
        let smallArr = []  // 每页商品的数组  一个小数组是一页
        //遍历所有商品
        homelist.personalShop.forEach(c => {
          //当小数组里没有商品时 把它添加到arr中（只能添加一次）
          if(smallArr.length===0) {
            arr.push(smallArr)
          }
          //把商品添加到小数组中
          smallArr.push(c)
          //如果小数组商品满3个 就重新创建个小数组
          if(smallArr.length === 3) {
            smallArr = []
          }
        })
        return arr
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .home-wrapper
    width 100%
    overflow hidden
    .headerNav
      position fixed
      width 750px
      height 150px
      z-index 20
      background-color #fff
      .headerNav-top
        display flex
        padding 10px
        h1
        &.logo
          width 140px
          height 40px
          background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
          display inline-block
          margin 8px 5px 0 5px
          background-size cover
          background-position center
          background-repeat no-repeat
          margin-left 20px
        .input
          width 440px
          height 56px
          border 1px solid #ededed
          background-color #ededed
          border-radius 10px
          text-align center
          line-height 56px
          font-size 28px
          color #666
          margin-left 10px
          .iconfont
            font-size 32px
        .login
          width 74px
          height 40px
          border 1px solid #b4282d
          border-radius 10px
          color #b4282d
          margin-left 30px
          margin-top 10px
          text-align center
          line-height 40px
      .nav-wrapper
        width 650px
        margin-top 10px
        overflow hidden
        .nav-list
          display flex
          float left
          white-space nowrap
          padding-left 5px
          li
            color #666
            padding 0 5px
            height 35px
            font-size 28px
            margin 0 10px
            &.active
              border-bottom 3px solid #b4282d

      .icon
        width 100px
        height 60px
        line-height 60px
        text-align center
        position absolute
        top 78px
        right 0
        background rgba(255,255,255,.1)
        z-index 6
        transition transform .3s
        &.rotate
          transform rotate(180deg)
        .iconfont
          font-size 40px

      .quanbu
        position absolute
        top 80px
        width 100%
        height 370px
        background-color #fff
        .pindao
          font-size 28px
          padding-left 20px
          margin-top 10px
        .tuijian
          .list
            display flex
            flex-wrap wrap
            padding 50px 0 0 25px
            li
              width 140px
              height 50px
              border 1px solid #eee
              background-color #FAFAFA
              border-radius 5px
              text-align center
              line-height 50px
              margin 0 0 30px 30px
              &.color
                border 1px solid #b4282d
                color #b4282d






    .content
      width 100%
      .mask
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background rgba(0,0,0,.5)
      .top-swiper
        bottom-border-1px(#e4e4e4)
        height 400px
        background #fff
        padding-top 150px
        .swiper-pagination
          width: 100%
          height: 10px
          /*包裹自定义分页器的div的位置等CSS样式*/
          &.swiper-pagination-custom
            bottom: 10px;
            left: 0;
            width: 100%;
            height: 50px
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            img
              width 100%
              height 100%
      .ziying
        width 100%
        height 40px
        ul
          width 100%
          height 100%
          color #b4282d
          margin-left 58px
          margin-top 20px
          li
            float left
            margin-right 30px
            .tubiao
              background-image url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
              display inline-block
              background-repeat no-repeat;
              background-size 100% 100%;
              width 32px
              height 32px
              vertical-align middle
              &.tu1
                background-image url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
              &.tu2
                background-image url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)

            span
              vertical-align middle


      .menuList
        width 100%
        .list
          display flex
          float left
          flex-wrap wrap
          margin-left 15px
          li
            width 110px
            height 156px
            margin 0 10px
            img
              width 110px
              height 110px
            p
              text-align center
              margin 8px 0 0 5px
      .image
        .kola
          width 750px
          height 160px
      .hot
        width 100%
        display flex
        flex-wrap wrap
        margin 10px 0 0 33px

        .first
          width 310px
          height 250px
          padding 30px 0 0 30px
          background-color #f5f5f5
          img
            width 150px
            height 150px
          &.li
            margin 0 3px 3px 0
          &.third
            margin-right 3px
          .pics
            margin-top 20px
          .title
            font-size 32px
            color #333
          .youhui
            margin-top 5px
            color #7f7f7f

      .private
        width 750px
        height 486px
        .privateTitle
          width 750px
          padding 0 30px
          box-sizing border-box
          height 100px
          line-height 100px
          font-size 32px
        .privateImg
          width 100%
          height 360px
          overflow hidden
          .li
            display flex
            justify-content space-around
            width 100%
            .privateBlock
              width 215px
              height 315px
              display flex
              flex-direction column
              align-items center
              img
                margin-bottom 12px
                width 215px
                height 215px
                background-color #f5f5f5
              .price
                color #b4282d



          .private-swiper-pagination
            height 20px

      .timeLimit
        padding-left 30px
        line-height 100px
        .limit-title
          .limit
            font-size 34px
            float left
          .time
            margin-left 20px
            float left
            .h
              width 36px
              height 36px
              background-color #333
              border-radius 5px
              color #fff
              margin-right 8px
          .more
            font-size 32px
            color #333
            line-height 36px
            margin 30px 10px 0 0
            float right
        .timeToBuy-goods
          .timeToBuy-good
            text-align center
            color #333
            float left
            margin-right 10px
            img
              display block
              width 216px
              height 216px
              background #F5F5F5
              border-radius 4px
            .activityPrice
              font-size 24px
              color #b4282d
            .originPrice
              font-size 24px
              color #7F7F7F
              text-decoration line-through

      .special
        width 100%
        overflow hidden
        .specialTitle
          width 100%
          height 80px
          line-height 80px
          .title
            font-size 32px
            margin-left 30px
          .many
            font-size 32px
            float right
            margin-right 10px
        .topics-wrapper
          width 100%
          .topics
            display flex
            float left
            white-space nowrap
            overflow hidden
            .topic
              width 480px
              height 394px
              background-color #f5f5f5
              border-radius 10px
              margin-right 10px
              img
                width 480px
                height 266px
                border-radius 10px
              .evaluate
                font-size 28px
                padding 20px 30px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
              .des
                color #7f7f7f
                padding-left 30px



    footer
      width 100%
      height 250px
      background-color #414141
      margin 30px 0 100px 0
      div
        width 180px
        height 65px
        border 1px solid #fff
        color #fff
        text-align center
        line-height 65px
        float left
        border-radius 10px
        &.down
          margin 40px 50px 0 150px
        &.pc
          margin 40px 0 0 60px
      p
        color #999
        text-align center
      .banquan
        padding-top 150px


</style>
<style>
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: .53333rem;
    height: .05333rem;
    display: inline-block;
    background: #fff;
    opacity: .4;
    border-radius: 0;
    margin: 0 .13333rem 0 0;
  }

  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #ab2b2b;
    border-radius: 0;
  }

</style>


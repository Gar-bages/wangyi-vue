<template>
  <div class="photoWrapper">
    <div class="photoTitle">{{topic.title}}</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(look,index) in topic.lookList" :key="index">
          <img :src="look.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="read">
      <i class="iconfont icon-iconkanguo"></i>
      <span class="readed">{{readCount}}人看过</span>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    props:{
      topic:Object,
    },
    mounted () {
      var mySwiper = new Swiper('.swiper-container',{
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        coverflowEffect: {
          autoplay:true,
          rotate: 0,  //slide做3d旋转时Y轴的旋转角度。默认50。
          // stretch: 10,  //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          // depth: 60,  // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 3, // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows : false,  // slideShadows：开启slide阴影。默认 true。
        },
      })
    },
    computed: {
      readCount () {
        const {readCount} = this.topic
        let readCountStr = readCount.toString()
        if(readCountStr.length<=3) {
          return readCountStr
        }else if(readCountStr.length === 4) {
          return (readCount/1000).toString().slice(0,3) + 'k'//slice(0,3) 从索引0到3[0,3)
        }else {
          return (readCount/10000).toString().split('.')[0] + 'w' //13.4 [13 , 4] 13w
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .photoWrapper
    width 100%
    padding 30px 20px
    .photoTitle
      font-size 36px
      margin-bottom 20px
    .swiper-container
      width 100%
      overflow hidden

      .swiper-wrapper
        width 100%
        .swiper-slide
          background #fff
          &.swiper-slide-active
            img
              opacity 1
          img
            width 250px
            height 250px
            border-radius 10px
            opacity 0.8
    .read
        font-size 28px
        color #999
        vertical-align middle
        margin-top 20px
        .iconfont
          font-size 30px


</style>

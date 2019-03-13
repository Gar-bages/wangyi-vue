<template>
  <div class="showWrapper" v-if="look">
    <div class="buyerInfo">
      <img :src="look.avatar" alt="">
      <span class="buyerName">{{look.nickname}}</span>
    </div>
    <div class="buyerPj">{{look.content}}</div>
    <div class="pic" v-if="look.lookPics[0]">
      <img v-lazy="look.lookPics[0].picUrl" alt="">
    </div>
    <div class="read">
      <i class="iconfont icon-iconkanguo"></i>
      <span class="readed">{{readCount}}人看过</span>
    </div>
  </div>
</template>
<script>
  export default {

    props:{
      look:Object,
    },
    computed: {
      readCount () {
        const {readCount} = this.look
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
  .showWrapper
    width 100%
    padding 30px 20px
    .buyerInfo
      width 100%
      img
        width 50px
        height 50px
        border-radius 50%
        vertical-align middle
      .buyerName
        font-size 28px
        margin-left 20px
        vertical-align middle

    .buyerPj
      font-size 32px
      margin 20px 20px 20px 0
      color #333
      line-height 60px
      text-overflow ellipsis
      overflow hidden
      display -webkit-box  //display: flex的老版
      -webkit-line-clamp 3
      -webkit-box-orient vertical //主轴和侧轴对调
    .pic
      width 706px
      height 470px
      img
        width 100%
        height 100%

    .read
      font-size 28px
      color #999
      vertical-align middle
      margin-top 20px
      .iconfont
        font-size 30px


</style>

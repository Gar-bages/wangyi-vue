<template>
  <div class="xuanmei">
    <div class="head">
      <img class="avatar" :src="topic.avatar" alt="">
      <span class="headTitle">{{topic.nickname}}</span>
    </div>
    <div class="desc">{{topic.title}}</div>
    <div class="banner">
      <img v-lazy="topic.picUrl" alt="">
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
      topic:Object,
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
  .xuanmei
    width 100%
    padding 30px 20px
    .head
      width 100%
      .avatar
        width 50px
        height 50px
        border-radius 50%
        vertical-align middle
      .headTitle
        font-size 28px
        margin-left 20px
        vertical-align middle


    .desc
      font-size 36px
      margin 20px 20px 20px 0
      color #333
      line-height 60px
    .banner
      width 700px
      height 388px
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

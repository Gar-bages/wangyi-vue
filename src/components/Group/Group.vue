<template>
  <div class="groupWrapper">
    <div class="groupLeft">
      <div class="leftTop">
        <img :src="topic.avatar" alt="">
        <span>{{topic.nickname}}</span>
      </div>
      <div class="title">{{topic.subTitle}}</div>
      <div class="desc">{{topic.title}}</div>
      <div class="read">
        <i class="iconfont icon-iconkanguo"></i>
        <span class="readed">{{readCount}}人看过</span>
      </div>
    </div>
    <div class="groupRight">
      <img v-lazy="topic.picUrl" alt="">
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
  .groupWrapper
    width 100%
    padding 30px 20px
    display flex
    .groupLeft
      width 425px
      .leftTop
        margin-bottom 20px
        img
          width 50px
          height 50px
          border-radius 50%
          vertical-align middle
        span
          font-size 28px
          margin-left 20px
          vertical-align middle


      .title
        font-size 36px
        color #333
        line-height 50px
      .desc
        margin-top 10px
        font-size 28px
        color #7f7f7f
      .read
        font-size 24px
        color #999
        vertical-align middle
        margin-top 20px
        .iconfont
          font-size 26px

    .groupRight
      position relative
      width 280px
      height 280px
      overflow hidden
      img
        position absolute
        left 0
        top 0
        display block
        height 100%

</style>

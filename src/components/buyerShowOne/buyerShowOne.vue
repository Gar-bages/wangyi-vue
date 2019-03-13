<template>
  <div class="newBuyShowWrapper">
    <div class="newBuyShowImg">
      <img v-lazy="topic.bannerInfo.picUrl" alt="">
    </div>
    <div class="newBuyShowContent line_two_point">
      {{topic.content}}
    </div>
    <div class="newBuyShowInfo">
      <div class="newBuyShowAvatar">
        <img v-lazy="topic.avatar" alt="">
        <span>{{topic.nickName}}</span>
      </div>
      <div class="good">
        <i class="iconfont icon-dianzan"></i>
        <span>{{topic.supportNum}}</span>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    props:{
      topic:Object,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .newBuyShowWrapper
    width 345px
    margin 0 0 20px 20px
    box-shadow 0 0 0.3rem #ddd
    .newBuyShowImg
      width 100%
      img
        width 100%
    .newBuyShowContent
      margin-top 10px
      font-size 24px
      line-height 40px
      width 100%
      box-sizing border-box
      text-align center
      color #333
    .newBuyShowInfo
      clearFix()
      padding-bottom 20px
      .newBuyShowAvatar
        margin-left 20px
        float left
        img
          width 48px
          height 48px
          border-radius 50%
          vertical-align middle
        span
          vertical-align middle
          margin-left 3px
      .good
        float right
        margin 10px 20px 0 0
        .iconfont
          font-size 32px
</style>

<template>
  <div class="newBuyShowWrapper">
    <div class="newBuyShowImg">
      <img v-lazy="topic.bannerInfo.picUrl" alt="">
    </div>
    <div class="info">
      <div class="title">{{topic.collection.title}}</div>
      <div class="desc">{{topic.collection.subtitle}}</div>
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
  .newBuyShowWrapper
    width 345px
    margin 0 0 20px 20px
    box-shadow 0 0 0.3rem #ddd
    .newBuyShowImg
      width 100%
      img
        width 100%
    .info
      text-align center
      padding  30px 0
      background-color #f4f4f4
      .title
        font-size 32px
        font-weight bold
      .desc
        margin-top 20px
        color #333
</style>

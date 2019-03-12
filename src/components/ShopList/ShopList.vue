<template>
  <div class="listWrapper">
    <div class="listTitle">{{topic.title}}</div>
    <div class="listDesc">{{topic.subTitle}}</div>
    <div class="listImg">
      <ul class="Imgs">
        <li v-for="(item,index) in topic.itemList" :key="index"><img :src="item.itemUrl" alt=""></li>
      </ul>
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
  .listWrapper
    width 100%
    padding 30px 20px
    .listTitle
      margin-top 10px
      font-size 36px
      color #333
    .listDesc
      margin-top 20px
      font-size 28px
      color #7f7f7f
      line-height 30px
      margin-right 30px
    .listImg
      width 100%
      .Imgs
        width 100%
        display flex
        flex-wrap wrap
        li
          background-color #f4f4f4
          margin 10px 15px 0 0
          img
            width 167px
            height 167px



</style>

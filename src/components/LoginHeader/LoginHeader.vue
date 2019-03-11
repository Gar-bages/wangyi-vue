<template>
  <div class="HeadWrapper">
    <i class="iconfont icon-shouye" @click="$router.replace('/homepage')"></i>
    <div class="logo"></div>
    <div class="right-icon">
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.push('/shopcart')"></i>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .HeadWrapper
    height 90px
    background-color #fafafa
    line-height 90px
    display flex
    justify-content space-between
    .icon-shouye
      font-size 54px
      margin-left 20px
    .logo
      width 170px
      height 54px
      margin 20px 0 0 100px
      background-position 0 -1.70667rem
      display inline-block
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)
      background-repeat no-repeat
    .right-icon
      i
        font-size 50px
        margin-right 30px
</style>

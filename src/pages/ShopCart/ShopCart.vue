<template>
  <div class="shopCartWrapper">
    <div class="cartHeader">
      <span class="cart">购物车</span>
      <span class="ticket">领券</span>
    </div>
    <div class="cartMain">
      <div class="P-wrapper">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88元免邮费</span>
      </div>
      <div class="cartImg">
      </div>
      <div class="button">
        <span class="text">去添加点什么吧</span>
        <div class="anniu" @click="$router.replace('/personal')">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shopCartWrapper
    position fixed
    top 0
    bottom 0
    width 100%
    background-color #f4f4f4
    .cartHeader
      height 88px
      background-color #fff
      text-align center
      line-height 88px
      .cart
        font-size 36px
        margin-left 80px
      .ticket
        font-size 32px
        color #b4282d
        float right
        padding-right 40px

    .cartMain
      width 100%
      text-align center
      .P-wrapper
        width 100%
        display flex
        justify-content space-around
        margin-top 20px
        color #666
      .cartImg
        display inline-block
        width 248px
        height 248px
        margin-top 350px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
      .button
        text-align center
        .text
          color #999
          font-size 28px
        .anniu
          width 460px
          height 90px
          margin 50px auto
          line-height 90px
          background-color #b4282d
          color #fff
          font-size 30px
          border-radius 10px
</style>

<template>
  <div class="loginWrapper">
    <LoginHeader/>
    <div class="loginMain">
      <div class="mainImg">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phoneLogin" @click="$router.replace('./personal/phone')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="emailLogin">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="register">
        <span>手机号快速注册 ></span>
      </div>
      <div class="way">
        <div class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrapper
    width 100%
    position fixed
    top 0
    bottom 0
    background-color #f4f4f4
    .loginMain
      width 100%
      .iconfont
        font-size 32px
      .mainImg
        img
          width 268px
          height 90px
          padding 180px 0 180px 260px

      .phoneLogin
        width 600px
        height 90px
        text-align center
        margin 30px auto
        line-height 90px
        background-color #b4282d
        color #fff
        font-size 30px
        border-radius 10px
      .emailLogin
        width 600px
        height 90px
        text-align center
        margin 30px auto
        line-height 90px
        border 1px solid #b4282d
        color #b4282d
        font-size 30px
        border-radius 10px
      .register
        font-size 28px
        text-align center
      .way
        display flex
        color #7f7f7f
        font-size 32px
        margin-top 350px
        justify-content center
        height 40px
        .iconfont
          font-size 36px
        .weixin
          border-right 2px solid #7f7f7f
          padding 0 30px
        .qq
          padding 0 30px
          border-right 2px solid #7f7f7f
          margin-right 20px



</style>

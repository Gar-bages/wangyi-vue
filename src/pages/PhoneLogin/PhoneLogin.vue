<template>
  <div class="phoneWrapper">
    <LoginHeader/>
    <div class="phoneMain">
      <div class="phone-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="from">
        <input type="text" placeholder="请输入手机号" v-model="phone">
        <span class="clear" v-show="phone" @click="phone=''">X</span>
        <div class="message" v-show="!loginWay">
          <input type="text" placeholder="请输入短信验证码" v-model="code">
          <div class="code">获取验证码</div>
          <div class="problem">
            <span class="trouble">遇到问题?</span>
            <span @click="toggleLoginWay">使用密码验证登录</span>
          </div>
        </div>
        <div class="pwd" v-show="loginWay">
          <input type="text" placeholder="请输入密码" v-model="password">
          <div class="problem">
            <span class="trouble">忘记密码?</span>
            <span @click="toggleLoginWay">使用短信验证登录</span>
          </div>
        </div>
      </div>

    </div>
    <div class="deng" @click="login">
      <span>登录</span>
    </div>
    <div class="other">
      <span @click="$router.replace('/personal')">其它方式登录</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        loginWay:false, //登录方式 false短信登录 true密码登录
        phone:'', //手机号的初始显示
        code:'',//一次性验证码
        password:'', //密码初始显示
      }
    },
    methods: {
      toggleLoginWay () {
        this.loginWay = !this.loginWay
      },
      login () {
        const {loginWay,phone,code,password} = this
        if(loginWay) { //密码登录
          if( !/^1\d{10}$/.test(phone)) {
            alert('请输入正确的手机号')
            return
          }else if(!password.trim()){
            alert('必须输入密码')
            return
          }
          console.log('密码验证成功');
        }else { //短信登录
          if( !/^1\d{10}$/.test(phone)) {
            alert('请输入正确的手机号')
            return
          }else if(!/^\d{6}$/.test(code)) {
            alert('请输入正确的验证码')
            return
          }
          console.log('验证成功')
        }

      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .phoneMain
    width 100%
    text-align center
    .phone-logo
      padding-top 70px
      margin-bottom 150px
      img
        width 192px
        height 64px
    .from
      position relative
      input
        width 90%
        height 90px
        font-size 28px
        outline none
        border-bottom 1px solid #bdbdbd
        margin 20px 0
      .clear
        position absolute
        top 40px
        right 30px
        display block
        width 60px
        height 60px
        line-height 60px
      .message
        position relative
        .code
          position absolute
          top 40px
          right 30px
          width 170px
          height 58px
          line-height 58px
          border 1px solid #333
          color #333
          font-size 26px
          border-radius 10px
        .problem
          width 90%
          margin 10px auto
          display flex
          justify-content space-between
          font-size 28px
          .trouble
            color #bdbdbd
      .pwd
        .problem
          width 90%
          margin 10px auto
          display flex
          justify-content space-between
          font-size 28px
          .trouble
            color #bdbdbd
  .deng
    width 650px
    height 80px
    text-align center
    margin 40px auto
    line-height 90px
    background-color #b4282d
    color #fff
    font-size 30px
    border-radius 10px
  .other
    width 650px
    height 80px
    text-align center
    margin 30px auto
    line-height 90px
    border 1px solid #b4282d
    color #b4282d
    font-size 30px
    border-radius 10px
</style>

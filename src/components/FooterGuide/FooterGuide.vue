<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide-item" :class="{on:$route.path==='/homepage'}" @click="goto('/homepage')">
      <span>
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{on:$route.path.includes('/categroylist')}" @click="goto('/categroylist')">
      <span>
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{on:$route.path==='/recomment'}" @click="goto('/recomment')">
      <span>
        <i class="iconfont icon-topic"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
      <span>
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide-item" :class="{on:$route.path==='/personal'}" @click="goto('/personal')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    right 0
    left 0
    bottom 0
    width 100%
    height 100px
    display flex
    justify-content space-around
    z-index 40
    background-color #fff
    .guide-item
      display flex
      flex-direction column
      align-items center
      margin-top 5px
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 6px
        margin-bottom 6px

        .iconfont
          font-size 40px
</style>

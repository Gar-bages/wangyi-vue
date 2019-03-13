<template>
  <div class="shiwu-wrapper">
    <div class="HeadWrapper">
      <div class="Head">
        <i class="iconfont icon-shouye" @click="$router.replace('/homepage')"></i>
        <div class="center">
          <span class="find">发现</span>
          <span class="select">甄选家</span>
        </div>
        <div class="right-icon">
          <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
          <i class="iconfont icon-gouwuche" @click="$router.push('/shopcart')"></i>
        </div>
      </div>
      <div class="navWrapper">
        <ul class="navBar">
          <li class="navitem" v-for="(tab,index) in topicTab"
              :key="index" :class="{active:$route.params.id*1 === index}">
            <router-link :to="`/recomment/topics/${index}`">
              {{tab.tabName}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="shiwu-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'


  export default {
    mounted () {
      this.$store.dispatch('getTabs')
      new BScroll('.navWrapper',{
        click:true,
        scrollX:true
      })
    },
    computed: {
      ...mapState({
        topicTab: state => state.topic.topicTab
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shiwu-wrapper
    width 100%
    .HeadWrapper
      width 100%
      .Head
        bottom-border-1px(#d9d9d9)
        height 90px
        background-color #fafafa
        line-height 90px
        display flex
        justify-content space-between
        .icon-shouye
          font-size 54px
          margin-left 20px
        .right-icon
          i
            font-size 50px
            margin-right 20px
        .center
          .find
            font-size 36px
            color #ab2b2b
            font-weight bold
            margin-left 30px
          .select
            font-size 28px
            color #7f7f7f
            margin-left 40px

      .navWrapper
        height 75px
        width 100%
        overflow hidden
        bottom-border-1px(#d9d9d9)
        background-color #fafafa
        .navBar
          height 75px
          display flex
          float left
          white-space nowrap
          .navitem
            float left
            height 73px
            line-height 73px
            font-size 28px
            color #7f7f7f
            padding 0 20px
            margin 0 10px
            &.active
              color #ab2b2b
              border-bottom 2px solid #ab2b2b



</style>

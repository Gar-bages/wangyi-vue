<template>
  <div>
    <div class="categroy-header">
      <div class="input">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <span class="font">搜索商品, 共19999款好物</span>
      </div>
    </div>
    <div class="categroy-wrapper">
      <div class="categroy-left">
        <ul class="leftUl">
          <li class="leftLi"
              :class="categoryItem.id===Number($route.query.categoryId)?'active':'' "
              v-for="(categoryItem, index) in cateList.categoryL1List"
              :key="index">
            <!--通过query参数把id传过去 通过id显示对应的数据-->
            <router-link :to="`/categroylist/list?categoryId=${categoryItem.id}`">
              <span>{{categoryItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="categroy-right">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$store.dispatch('getCateList')
      new BScroll('.categroy-left',{
        click:true,
      })
    },
    computed: {
      ...mapState({
        cateList:state => state.cateList.cateList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .categroy-header
      width 90%
      height 56px
      line-height 56px
      padding  20px 0 0 30px
      background-color #fff
      .input
        width 100%
        background #f4f4f4
        font-size 28px
        padding-left 20px
        float left
        text-align center
        border-radius 10px
        color #666
        .iconfont
          font-size 32px


    .categroy-wrapper
      width 100%
      overflow hidden
      .categroy-left
        right-border-1px(#d9d9d9)
        width 162px
        height 1125px
        float left
        .leftUl
          width 100%
          .leftLi
            position relative
            width 100%
            height 50px
            margin-top  40px
            text-align center
            border none
            display block
            color #333
            font-size 28px
            line-height 50px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            &:first-child
              margin-top 10px

            &.active
              span
                color #ab2b2b
              &::before
                content ' '
                position absolute
                top 0
                left 0
                bottom 0
                width .08rem
                background-color #ab2b2b

      .categroy-right
            margin-left 162px
</style>

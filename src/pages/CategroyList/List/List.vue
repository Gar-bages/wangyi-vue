<template>
  <div class="right-scroll" v-if="cateGroyListArr">
    <div class="scroll-wrapper">
      <div class="topImg">
        <img v-lazy="cateGroyListArr.wapBannerUrl" alt="">
      </div>
      <div class="right-main">
        <ul class="mainUl">
          <li class="mainLi" v-for="(sub,index) in cateGroyListArr.subCateList" :key="index">
            <img v-lazy="sub.wapBannerUrl" alt="">
            <p>{{sub.name}}</p>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted () {

    },
    computed: {
      ...mapState({
        cateList:state => state.cateList.cateList
      }),
      //右侧显示对应的数据
      cateGroyListArr () {
        if(this.cateList.categoryL1List) {
          //从左侧数组中找id 找到跟参数中的id一样 返回
          const result = this.cateList.categoryL1List.find(item => item.id===this.$route.query.categoryId*1)
          //如果没找到 默认显示数组第一个的数据
          if(!result) {
            return this.cateList.categoryL1List[0]
          }else {
            return result
          }
        }
      }
    },
    watch: {
      cateGroyListArr () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.right-scroll', {
              click: true,
            })
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .right-scroll
    height 1125px
    overflow hidden
    .scroll-wrapper
      padding  30px 0 0 30px
      .topImg
        width 526px
        height 196px
        img
          width 100%
          height 100%
      .right-main
        width 100%
        .mainUl
          width 100%
          .mainLi
            display inline-block
            width 144px
            margin-left 20px
            vertical-align top
            text-align center
            img
              width 144px
              height 144px

</style>

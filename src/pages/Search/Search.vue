<template>
  <div class="search-wrapper">
    <div class="searchTop">
      <div class="search" v-if="searchdata.defaultKeyword">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <span class="font">{{searchdata.defaultKeyword.keyword}}</span>
      </div>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    <div class="searchMain">
      <div class="hot-title">热门搜索</div>
      <ul class="searchItems" v-if="searchdata.hotKeywordVOList">
        <li class="item"
            :class="{grey:hot.highlight=== 1}"
            v-for="(hot,index) in searchdata.hotKeywordVOList" :key="index">
          {{hot.keyword}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {reqSearchData} from '../../api/index'
  export default {
    async mounted () {
      const result = await this.$store.dispatch('getSearchData')
      console.log('re',result)
      // const result = await reqSearchData()
      // console.log('re',result)
    },
    computed: {
      ...mapState({
        searchdata:state => state.search.searchdata,
      }),
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search-wrapper
    width 100%
    .searchTop
      width 100%
      height 56px
      line-height 56px
      margin 20px 0 0 30px
      .search
        width 75%
        height 100%
        background #f4f4f4
        font-size 28px
        padding-left 20px
        float left
        color #666
        .iconfont
          font-size 32px
      .cancel
        display inline-block
        font-size 28px
        margin-left 40px
        height 60px
        line-height 60px
    .searchMain
      width 100%
      .hot-title
        height 40px
        font-size 30px
        margin 40px 0 0 30px
        color #666
      .searchItems
        width 100%
        font-size 28px
        .item
          float left
          border 1px solid #999
          border-radius 5px
          padding 0 10px
          line-height 50px
          margin 30px 0 0 40px
          color #666
          &.grey
            border-color #b4282d
            color #b4282d
</style>

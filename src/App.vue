<template>
  <div>
    <router-view/>
    <FooterGuide v-if="!$route.path.includes('personal') && !$route.path.includes('search')"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .line_two_point    /* 第二行出现省略号 - 前提： width 固定，不能有padding */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
</style>

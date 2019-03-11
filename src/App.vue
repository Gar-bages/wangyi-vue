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

<style>

</style>

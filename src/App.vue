<template>
  <div id="app">
    <HeaderC></HeaderC>
    <router-view></router-view>
    <FooterC v-show="this.$route.meta.show"></FooterC>
  </div>
</template>

<script>
import HeaderC from './components/HeaderC'
import FooterC from './components/FooterC'

export default {
  name: 'App',
  components: {
    HeaderC,
    FooterC,
}
}
</script>

<style lang="css">
</style>

<template>
  <div id="app">
    <HeaderC></HeaderC>
    <FooterC></FooterC>
  </div>
</template>

<script>
import HeaderC from './components/HeaderC.vue'
import FooterC from './components/FooterC/FooterC.vue'

export default {
  name: 'App',
  components: {
    HeaderC,
    FooterC
}
}
</script>

<style lang="less">

</style>

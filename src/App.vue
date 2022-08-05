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
},
data(){
  return {
  }
},
mounted(){
  // 为了避免每次加载typeNav组件都会发起ajax请求，把这个请求放在Aoo.vue中
  // 通知Vuex发起请求,获取数据
  this.$store.dispatch("categoryList");
}
}
</script>

<style lang="css">
</style>

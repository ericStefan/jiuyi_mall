<template>
  <div>
    这是search
    ----params：{{this.$route.params.keyword}}
    ----query:{{this.$route.query.k}}
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Search",
    // 路由可以传递props参数
    props:["keyword","a","b","k"]
}
</script>

<style>

</style>
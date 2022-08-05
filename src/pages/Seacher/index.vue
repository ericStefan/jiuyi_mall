<template>
  <div>
    <!-- 这是search模块 -->
    <TypeNav></TypeNav>
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
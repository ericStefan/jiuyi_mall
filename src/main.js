import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router";
Vue.config.productionTip = false;

// 引入store
import store from "@/store";

// 将TypeNav注册成全局组件
import TypeNav from "@/components/TypeNav"
Vue.component(TypeNav.name,TypeNav);

// 测试接口
import {reqCategoryList} from "@/api";
reqCategoryList();

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册store 
  store
}).$mount('#app')

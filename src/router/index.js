// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 解决多次点击同一路由报错
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Seacher"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[
        // 重定向
        {
            path:"*",
            redirect:"/home",
        },
        {
            path:"/home",
            component:Home,
            meta:{
                show:true
            }
        },
        {
            // 传递params参数  占位参数后加?表示可传可不传，避免url错误
            path:"/search/:keyword?",
            component:Search,
            name:"search",
            meta:{
                show:true
            },

            // 给路由组件传递props参数
            //1、 只能传递params参数
            // props:true
            // 2、对象写法 额外给路由传递一些props
            // props:{
            //     a:1,
            //     b:2
            // }
            // 3、函数写法  params和query都可以传递
            props:($route)=>{
                return {keyword:$route.params.keyword,k:$route.query.k};
            }
        },
        {
            path:"/Login",
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                show:true
            }
        }
    ]
})
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入小仓库
import home from "./home"
import search from "./search"

// // state:仓库存储数据的地方
// const state = {};
// // mutations:修改state的唯一手段
// const mutations = {};
// // actions:处理actions,可以书写自己的业务逻辑，也可以处理异步
// const actions = {};
// // getters:修饰state中的数据(相当于计算属性)
// const getters  = {};
// // 对外暴露Store类的一个实例
// export default new Vuex.Store({
//     state,
//     mutations,
//     actions,
//     getters
// })

export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,
        search
    }
})
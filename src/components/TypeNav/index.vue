<template>
    <div class="type-nav">
        <div class="container">
            <!-- <h1>{{categoryList}}</h1> -->
            <!-- 事件 -->
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <!-- 为了避免重复创建router-view组件，消耗资源，使用编程式导航，利用事件委派，也能避免v-for导致的事件多次挂载 -->
                        <div class="all-sort-list2" @click="goSearch">

                            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId"
                                :class="{ cur: currentIndex == index }">
                                <h3 @mouseenter="changeIndex(index)">
                                    <a href="javascript:;" :data-categoryName="c1.categoryName"
                                        :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix" v-for="(c2, index) in c1.categoryChild"
                                    :style="{ display: currentIndex == index ? 'block' : 'none' }" :key="c2.categoryId">
                                    <div class="subitem">
                                        <dl class="fore">
                                            <dt>
                                                <a href="javascript:;" :data-categoryName="c2.categoryName"
                                                    :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                                            </dt>
                                            <dd>
                                                <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                                                    <a href="javascript:;" :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

            </div>

            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
// 全局组件 TypeNav

import { mapState } from 'vuex';
// 引入loadsh节流函数
import throttle from "lodash/throttle";

export default {
    name: "TypeNav",
    data() {
        return {
            currentIndex: -1,
            show: true
        }
    },
    // 组件挂载成功时发起发起请求
    mounted() {
        // // 通知Vuex发起请求,获取数据
        // this.$store.dispatch("categoryList");

        if (this.$route.path != "/home") {
            this.show = false;
        }
    },

    computed: {
        ...mapState({
            // 右侧需要的是一个函数，当使用这个计算属性的时候会执行
            // 参数state就是大仓库中的数据
            categoryList: (state) => state.home.categoryList,
        })
    },

    methods: {
        // 通过动态添加类名改变样式
        // 添加节流
        changeIndex: throttle(function (index) {
            this.currentIndex = index;
        }, 100),



        goSearch(event) {
            let el = event.target;
            // dataset属性可以获取当前节点的自定义属性,自定义属性名会被解析成小写
            // let {a,b,c} 这是es6的对象式赋值参数方法，即把对应参数名的对象属性赋值给该参数
            let { categoryname, category1id, category2id, category3id } = el.dataset;
            // 拥有自定义属性名categoryName就是当航a标签
            if (categoryname) {
                let location = { name: "search" };
                let query = { categoryName: categoryname };

                if (category1id) {
                    query.category1Id = category1id;
                }
                else if (category2id) {
                    query.category2Id = category2id;
                }
                else if (category3id) {
                    query.category3Id = category3id;
                }

                // 整理完整参数
                location.query = query;

                console.log(location);
                //  根据路由对象，跳转路由
                if (this.$route.params) {
                    location.params = this.$route.params;
                }
                this.$router.push(location);
            }
        },

        leaveShow() {
            this.currentIndex = -1;
            if (this.$route.path != "/home") {
                this.show = false;
            }
        },

        enterShow() {
            if (this.$route.path != '/home') {
                this.show = true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        // display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            // display: block;
                        }
                    }
                }

                .cur {
                    background-color: skyblue;
                }
            }
        }

        // sort的过度动画
        .sort-enter {
            height: 0;
        }

        .sort-enter-to {
            height: 461px;
        }

        .sort-enter-active {
            transition: all .5s linear;
        }

        .sort-leave {}

        .sort-leave-to {}

        .sort-leave-active {
            transform: all 1s ease;
        }
    }
}
</style>
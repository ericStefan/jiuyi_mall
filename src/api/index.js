// API统一进行管理
import request from "./request";

// 获取商品列表的get请求
export const reqCategoryList = ()=>request({url:'/product/getBaseCategoryList',method:'get'});

// 二次封装axios
import axios from "axios";
// 引入进度条  start：进度条开始  done:进度条结束
import nprogress from "nprogress";
// 引入进度条样式 可在css文件中修改样式
import "nprogress/nprogress.css";

const request = axios.create({
    // 请求路径带上api
    baseURL:"/api",
    // 请求超时
    timeout:5000,
});

// 请求拦截器
request.interceptors.request.use((config)=>{
    // config 配置对象，对象里面有一个属性很重要，header请求头
    // 进度条开始
    nprogress.start();
    return config;
})

request.interceptors.response.use((res)=>{
    // 成功的回调，服务器响应数据回来以后，响应拦截器可以检测到，可以做一些回调
    // 进度条结束
    nprogress.done();
    return res.data;
},(err)=>{
    return Promise.reject(new Error('false'));
})


export default request;
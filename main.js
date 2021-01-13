import Vue from 'vue'
import App from './App'
// 导入封装的请求设置
import request from "./utils/request.js"


Vue.config.productionTip = false
Vue.prototype.$http = request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

import Vue from 'vue'
import App from './App'

// mpvue引入store并全局注册的方法
import store from './store/index'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'



const app = new Vue(App)
app.$mount()

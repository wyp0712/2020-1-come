import Vue from 'vue'
import App from './App'

import store from './store/index'
import MpvueRouterPatch from 'mpvue-router-patch'
// import VueRouter from 'vue-router-mp'

Vue.config.productionTip = false
App.mpType = 'app'

// Vue.use(VueRouter)
Vue.use(MpvueRouterPatch)
Vue.prototype.$store = store;

const app = new Vue(App)
app.$mount()

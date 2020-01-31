// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [],
    cartData: []
  },
  mutations: {
    [types.TO_CART](state, item) {
      let goods = state.cartData.find(v => v.id === item.id) 
      if (goods) {
        goods.count++;
      } else {
        item.count = 1;
        state.cartData.push(item)
      }
      // 加入数据成功后提示用户加入成功
      mpvue.showToast({
        title: "已经添加",
        duration: 1500,
        mask: true
      })
    },
    [types.ADD_CART](state, index) {
      state.cartData[index].count++
    },
    [types.REMOVE_CART](state, index) {
      state.cartData[index].count--
    },
  },
  actions: {
    toCartFn({ commit }, item) {
      commit(types.TO_CART, item)
    },
    addCart({ commit }, index) {
      commit(types.ADD_CART, index)
    },
    removeCart({ commit }, index) {
      commit(types.REMOVE_CART, index)
    }
  }
})

export default store

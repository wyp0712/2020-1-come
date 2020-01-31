// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartData: []
  },
  mutations: {
    [types.MOVIE_TO_CART](state, item) {
      // 去重 
      let goods = state.cartData.find(v => v.id === item.id)
      // 数据加加
      if (goods) {
        goods.count++
      } else {
        Vue.set(item,'count', 1) // target（给谁加）''(加什么）'1'
        state.cartData.push(item)
      }
      // wx.showToast({
      //   title: '添加成功',
      //   mask: true
      // })
      mpvue.showToast({
        title: '添加成功',
        mask: true
      })
    },
    // 购物车++
    [types.MOVIE_ADD_CART](state, index) {
      state.cartData[index]++
    },
    // 购物车--
    [types.MOVIE_REMOVE_CART](state, index) {
      state.cartData[index]--
    }
  },
  actions: {
    toCart({ commit }, item ) {
      commit(types.MOVIE_TO_CART, item)
    },
    addCart({ commit }, index) {
      commit(types.MOVIE_ADD_CART, index)  
    },
    removeCart({ commit }, index) {
      commit(types.MOVIE_REMOVE_CART, index)  
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookRackList: []
  },
  mutations: {
    [types.READ_ADD_BOOKRACK](state, item) {
      let book =  state.bookRackList.find(val => val.id === item.id)
      if (!book) {
        state.bookRackList.push(item) 
      }
      console.log(state.bookRackList, 'state.bookRackList')
    }
  },
  actions: {
    addBookRack({ commit }, item) {
      commit(types.READ_ADD_BOOKRACK, item)
    } 
  },
  modules: {
  }
})

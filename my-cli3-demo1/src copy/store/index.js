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
        Vue.set(item, 'isInShelf', true)
        state.bookRackList.push(item) 
      }
    },
    [types.READ_REMOVE_BOOKRACK](state, item) {
      state.bookRackList = state.bookRackList.filter(val => {
        return val.id !== item.id
      })
    }
  },
  actions: {
    addBookRack({ commit }, item) {
      commit(types.READ_ADD_BOOKRACK, item)
    },
    removeBookRack({ commit }, item) {
      commit(types.READ_REMOVE_BOOKRACK, item)
    }
  },
  modules: {
  }
})

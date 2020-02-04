// action生成器
import axios from 'axios'
import '../mock/index'

export const initGoodsData = (data) => {
  return {
    type: 'init_goods_data',
    data
  }
}

export const getGoodsLeftArr = () => {
  return {
    type: 'get_left_data'
  }
}

export const getLeftIndex = (index) => {
  return {
    type: 'init_left_tabindex',
    index
  }
}

export const getGoodsList = () => {
  return (dispatch) => {
     axios.get('/api/goods').then(res => {
       const data = res.data
       const action = initGoodsData(data)
       dispatch(action)
     })
  }
}

// 购物车++
export const getGoodsAdd = (index) => {
  return {
    type: 'add_to_cart',
    index
  }
} 

// 购物车--
export const getGoodsRemove = (index) => {
  return {
    type: 'remove_to_cart',
    index
  }
} 
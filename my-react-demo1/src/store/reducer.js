const defaultState = { // 数据仓库
   goodsData: [],
   seller: [],
   goods: [],
   ratings: []
}

export default (state = defaultState, action) => {
  // 拷贝数据，修改数据 返回确定数据
  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === 'init_goods_data') {
    newState.seller = action.data.seller
    newState.goods = action.data.goods
    newState.ratings = action.data.ratings
  }
  
  return newState;
}
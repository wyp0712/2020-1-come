const defaultState = { // 数据仓库
   goodsData: [],
   seller: [],
   goods: [],
   ratings: [],
   rightArr: [],
   leftTabIndex: 0
}

export default (state = defaultState, action) => {
  // 拷贝数据，修改数据 返回确定数据
  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === 'init_goods_data') {
    newState.goodsData = action.data
    newState.seller = action.data.seller
    newState.goods = action.data.goods
    newState.ratings = action.data.ratings
  }

  if (action.type === 'init_left_tabindex') {
    console.log(action.index, 'action')
    newState.leftTabIndex = action.index
  }

  return newState;
}
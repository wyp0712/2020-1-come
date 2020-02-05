const defaultState = { // 数据仓库
   goodsData: [],
   seller: [],
   goods: [],
   ratings: [],
   rightArr: [],
   leftTabIndex: 0,
   cartData: []
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
    // console.log(action.index, 'action')
    newState.leftTabIndex = action.index
  }

  // 
  if (action.type === 'add_to_cart') {
    // 1. 找到数据 放入购物车 同时同时添加一个count
    const goods = newState.goods[newState.leftTabIndex].foods[action.index];
    let shopGood = newState.cartData.find(val => val.name === goods.name);
    if (shopGood) {
      shopGood.count ++;
      // 除了变更购物车中的数据之外，还要变更原有渲染数组的数据
      goods.count++; 
    } else {
      goods.count = 1; // 给数据添加一个数量用来加减；
      newState.cartData.push(goods)
    }
  }
  
  if (action.type === 'remove_to_cart') {
    const goods = newState.goods[newState.leftTabIndex].foods[action.index];
    if ( goods.count <= 1 ) {
      if (window.confirm('你确定删除吗')) {
        // 如果确定删除的话，删除购物车中的数据。同时隐藏页面中的减减按钮
        return newState;
      }
    }
    goods.count--;
  }

  if (action.type === 'cart_remove') {
    // index
    newState.cartData[action.index].count--
  }

  if (action.type === 'cart_add') {
    // 找到当前的tab切换，（需要下标）
    // 还要找到当前tab下的每一个数组中的数据
    newState.cartData[action.index].count++;
    let goods = newState.goods[newState.leftTabIndex]
    console.log(newState.goods[newState.leftTabIndex], 'newState.goods[newState.leftTabIndex]') 
  }

  return newState;
}
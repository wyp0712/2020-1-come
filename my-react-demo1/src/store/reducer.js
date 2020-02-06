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
  
  // 初始化数据 购物车页面
  if (action.type === 'init_goods_data') {
    newState.goodsData = action.data
    newState.seller = action.data.seller
    newState.goods = action.data.goods
    newState.ratings = action.data.ratings
    // console.log(newState.goods, 'goods')
    newState.goods.forEach((val) => {
      val.foods.forEach(item => {
        item.count = 0;
      })
    })
  }
  
  // 初始化tab切换下标
  if (action.type === 'init_left_tabindex') {
    newState.leftTabIndex = action.index;
    /**
     * 1. 每次点击添加都会将东西添加到购物车中，
     * 2. 每次tab切换的时候，将购物车中的数据和每次tab切换下的具体数据比较并且赋值；
     */
    const foods = newState.goods[action.index].foods; // tab切换下的数据
    // newState.cartData 购物车中的数据
    newState.cartData.forEach(cartItem => {
      foods.forEach(foodItem => {
         if (foodItem.name === cartItem.name) {
          foodItem.count = cartItem.count;
         } 
      })
    })
  }

  // tab切换页面中的加入购物车 ++
  if (action.type === 'add_to_cart') {
      
    // 1. 找到数据 放入购物车 同时同时添加一个count
    const goods = newState.goods[newState.leftTabIndex].foods[action.index];

    let shopGood = newState.cartData.find(val => val.name === goods.name);
    if (shopGood) {
      shopGood.count ++;
      // 除了变更购物车中的数据之外，还要变更原有渲染数组的数据
      goods.count++;
    } else {
      // 将tab切换的下标保存到每一个数据中；
      goods.tabIndex = newState.leftTabIndex;
      goods.count = 1; // 给数据添加一个数量用来加减；
      newState.cartData.push(goods)
    }
  }
   
  // tab切换页面中的--
  if (action.type === 'remove_to_cart') {
    const goods = newState.goods[newState.leftTabIndex].foods[action.index];
    let shopIndex = newState.cartData.findIndex(val => val.name === goods.name);
    if ( goods.count <= 1 ) {
      if (window.confirm('你确定删除吗')) {
        goods.count = 0;
        newState.cartData.splice(shopIndex, 1);
        // 如果确定删除的话，删除购物车中的数据。同时隐藏页面中的减减按钮
        return newState;
      }
    } else {
      goods.count--;
    }
  }
  
  // 购物车页面的--
  if (action.type === 'cart_remove') {
    // index
    const shopGoods = newState.goods[action.item.tabIndex].foods;
    if (newState.cartData[action.index].count <=1) {
      if (window.confirm('确定删除吗')) {
        // 删除购物车中的数据
         newState.cartData.splice(action.index, 1)
         // 删除购物车数据之后还要将原始数据中的count变为0;
         shopGoods.forEach((val, ind) => {
          if (val.name === action.item.name) {
            val.count = 0;
          }
        })
         return newState;
      }
    } else {
      newState.cartData[action.index].count--;
      shopGoods.forEach((val, ind) => {
        if (val.name === action.item.name) {
          val.count = newState.cartData[action.index].count;
        } 
      })
    }
  }
  
  // 购物车页面的++
  if (action.type === 'cart_add') {
    // 每条tab切换下的所有菜品数组 
    const shopGoods = newState.goods[action.item.tabIndex].foods;

    newState.cartData[action.index].count++;
    // 遍历原始数据，将购物车++ --后的数据count赋值给原始数据
    shopGoods.forEach((val, ind) => {
      if (val.name === action.item.name) {
        val.count = newState.cartData[action.index].count;
      }
    })
  }

  return newState;
}
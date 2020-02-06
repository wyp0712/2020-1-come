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
  }
  
  // 初始化tab切换下标
  if (action.type === 'init_left_tabindex') {
    newState.leftTabIndex = action.index
    // 热销菜系 
    /**
     * 1. 找出热销的数据 
     * 2. 找出每个tab切换数据- 每次tab切换的时候要遍历热销数据将热销count赋值给下面的数据
     */
    const hotGoods = newState.goods[0].foods;
    const foods = newState.goods[action.index].foods;

    hotGoods.forEach(val => {
      foods.forEach(item => {
        if (val.name === item.name) {
          item.count = val.count; // 将热销的count赋值给下面的数据
        }
      })
    })
    // 如果用户先点击了，非特热销的菜系，那就让用户将下面的数组遍历赋值给上面判断下标是否为0；
      
    console.log(newState.cartData, 'carData')


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
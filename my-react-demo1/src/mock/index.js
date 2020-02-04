import Mock from 'mockjs'
import GoodsData from './goods.json'

const iconList = Mock.mock({
  'list|10': [
    {
      "id": "@id",
      "img": "@image(100x100, @color, @ctitle)",
      "text": "@city"
    }
  ]
})

// icon接口

Mock.mock('/api/icon', iconList)

// 商品列表接口
Mock.mock('/api/goods', GoodsData)
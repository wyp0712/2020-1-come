import Mock from 'mockjs'

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
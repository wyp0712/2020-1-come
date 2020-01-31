import Mock from 'mockjs';

const MockData = Mock.mock({
  'list|10': [
    {
      'name': '@cname',
      'city': '@city'
    }
  ]
})

Mock.mock('/api/list', MockData)
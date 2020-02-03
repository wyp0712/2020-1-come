
// 二级路由
import HomeIndex from '@/pages/HomeIndex/HomeIndex'

import MyOrder from '@/pages/HomeIndex/MyOrder/MyOrder'
import Mine from '@/pages/HomeIndex/Mine/Mine'
import BusinessList from '@/pages/HomeIndex/BusinessList/BusinessList'


import GoodsList from '@/pages/GoodsList/GoodsList'
import OrderList from '@/pages/OrderList/OrderList'
import AddressList from '@/pages/AddressList/AddressList'
import SearchPage from '@/pages/SearchPage/SearchPage'

const routes = [
  {
    path: '/',
    redirect: '/homeIndex'
  },
  {
    path: '/homeIndex',
    components: HomeIndex,
    children: [
      {
        path: '/homeIndex',
        redirect: '/homeIndex/business'
      },
      {
        path: '/homeIndex/business',
        components: BusinessList
      },
      {
        path: '/homeIndex/myOrder',
        components: MyOrder
      },
      {
        path: '/homeIndex/mine',
        components: Mine
      }
    ]
  },
  {
    path: '/homeIndex/address',
    components: AddressList
  },
  {
    path: '/homeIndex/goods',
    components: GoodsList
  },
  {
    path: '/homeIndex/order',
    components: OrderList
  },
  {
    path: '/search',
    components: SearchPage
  }
]

export default routes;
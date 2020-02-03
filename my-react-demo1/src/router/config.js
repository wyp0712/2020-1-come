
// 一级路由
import HomeIndex from '@/pages/HomeIndex.js'
import MyOrder from '@/pages/MyOrder'
import Mine from '@/pages/Mine'

import BusinessList from '@/pages/BusinessList'
import GoodsList from '@/pages/GoodsList'
import OrderList from '@/pages/OrderList'
import AddressList from '@/pages/AddressList'
import SearchPage from '@/pages/SearchPage'

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
import BusinessList from '@/pages/BusinessList'
import GoodsList from '@/pages/GoodsList'
import OrderList from '@/pages/OrderList'
import AddressList from '@/pages/AddressList'


// import Home from '../views/Home/index'

// import Carttab1 from '../views/Cart/pages/tab1'
// import Carttab2 from '../views/Cart/pages/tab2'


const routes = [
  {
    path: '/',
    redirect: '/business'
  },
  {
    path: '/business',
    components: BusinessList
  },
  {
    path: '/goods',
    components: GoodsList
  },
  {
    path: '/order',
    components: OrderList
  },
  {
    path: '/address',
    components: AddressList
  }
]

export default routes;
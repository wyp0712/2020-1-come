import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearachPage.vue')
  },
  {
    path: '/bookRack',
    name: 'bookRack',
    component: () => import(/* webpackChunkName: "bookRack" */ '../views/BookRack.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detailbook" */ '../views/DetailPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

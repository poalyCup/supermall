import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

Vue.use(VueRouter)

  const routes = [
    {
      path: '',
      redirect: '/category'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/category',
      component: Category
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/detail',
      component: Detail
    }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  base: '/dist',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决两次点击报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location){
  return originalPush.call(this, location).catch(err => err)
}

export default router

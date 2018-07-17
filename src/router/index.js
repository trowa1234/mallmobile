import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/index'
import Classification from '@/pages/classification/classification'
import Cart from '@/pages/cart/cart'
import Favorite from '@/pages/favorite/favorite'
import UserIndex from '@/pages/user-index/user-index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //根路径
      redirect: '/home' //路由重定向到首页
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/favorite',
      component: Favorite
    },
    {
      path: '/userindex',
      component: UserIndex
    },
  ],
  //跳转路由时也没置顶。当在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

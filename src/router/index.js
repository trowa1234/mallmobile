import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ],
  //跳转路由时也没置顶。当在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

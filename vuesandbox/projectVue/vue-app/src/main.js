// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

// 引入路由(路由的速度特别快)模块
import VueRouter from 'Vue-router'

//引入请求模块
import VueResource from 'vue-resource'

import App from './App'

import Routers from './routers'
// import Users from './components/Users'

Vue.config.productionTip = false

// 使用路由/请求模块
Vue.use(VueRouter)
Vue.use(VueResource)



// 配置路由
const router = new VueRouter({
  routes:Routers,
  mode:"history"    // 将路径中的"#"干掉
})



// 注册全局组件
// Vue.component("users",Users)

/* eslint-disable no-new */
new Vue({
  router,      // 引路由
  el: '#app',
  template: '<App/>',
  components: { App }
})



/*
    路由:
      性能高, 速度快
      执行页面跳转时, 不会进行网络请求
*/

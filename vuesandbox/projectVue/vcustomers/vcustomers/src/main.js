
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Editor from './components/Editor'


import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource)
const router=new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    //需配置路由参数 customers.vue里router-link写啥这里是啥/:随便起
    {path:"/customerDetail/:id",component:CustomerDetail},
    {path:"/editor/:id",component:Editor},
  ],
  mode:"history",
  base:__dirname
})
new Vue({
  router,
  el: '#app',
  template:'<App/>',
  //template里写标签就不用componments
  components: { App }
})

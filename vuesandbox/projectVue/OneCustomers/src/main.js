import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import Editor from './components/Editor'



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes:[
    {path:"/",component:Customers},
    {path:"/about",component:About},
    {path:"/add",component:Add},
    {path:"/customerDetail/:id",component:CustomerDetail},
    // {path:"/editor/:id",component:Editor}
  ],
  mode:"history",
  base:__dirname   // 设置根路径
});

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});

// new Vue({
//   router,
//   template: `
// <div id="app">
//   <ul>
//     <li><router-link to="/">主页</router-link></li>
//     <li><router-link to="/about">关于</router-link></li>
//   </ul>
//   <router-view></router-view>
// </div>
// `
// }).$mount("#app")

import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './routers'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)


// 自定义过滤器
Vue.filter("snippet",function(value){
	// console.log(value);
  return value.slice(0,15) + "...";
});



// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode:"history",  // 去掉路径中的"#"号
  base:__dirname
});


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})

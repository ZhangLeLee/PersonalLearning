import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routers'


Vue.config.productionTip = false
// 使用VueResource
Vue.use(VueResource)
Vue.use(VueRouter)

// 自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8);
//   }
// });

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      // el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow'){
      // el.style.maxWidth = "1200px";
    }

    if(binding.arg == 'column'){
      el.style.background = "lightpink";
      el.style.padding = "30px";
    }
  }
});

// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
Vue.filter("snippet",function(value){
  return value.slice(0,120) + "...";
});

// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode:"history",  // 去掉路径中的"#"号
});


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
});

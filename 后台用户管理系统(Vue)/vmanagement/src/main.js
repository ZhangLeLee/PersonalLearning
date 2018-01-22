import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'

Vue.config.productionTip = false

Vue.use(VueRouter)

// Vue.use(axios)
// 引用axios后，修改原型链，更方便使用
Vue.prototype.$http = axios

// 设置路由
const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Customers},
		{path:"/about",component:About},
		{path:"/add",component:Add}
	]
})

new Vue({
  router,
  template:`
	<div id="app">
		<nav class="navbar navbar-default">
	        <div class="container">
		        <div class="navbar-header">
		          	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
		          	</button>
		          	<a class="navbar-brand" href="#">用户管理系统</a>
		        </div>
		        <div id="navbar" class="collapse navbar-collapse">
		          	<ul class="nav navbar-nav">
			            <li><router-link to="/">主页</router-link></li>
			            <li><router-link to="about">About</router-link></li>
		          	</ul>
		          	<ul class="nav navbar-nav navbar-right">
			            <li><router-link to="/add">添加用户</router-link></li>
		          	</ul>
	        	</div><!--/.nav-collapse -->
      		</div>
    	</nav>

		<router-view></router-view>
	</div>
  `
}).$mount("#app")

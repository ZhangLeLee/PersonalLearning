<template>
	<div id="users">
		<ul>
			<li v-on:click="user.show=!user.show" v-for="user in usersData">
				<h2>{{user.name}}</h2>
				<h3 v-show="user.show">{{user.position}}</h3>
			</li>
		</ul>

    <button v-on:click="deleteUser">删除</button>
	</div>
</template>

<script>
	export default {
		// props:["usersData"],
      	props:{
        	usersData:{
          		type:Array,
          		required:true
        	}
      	},
		data(){
		    return {
		    	
		    }
		},
    methods:{
    	deleteUser:function(){
        this.usersData.pop();
      }
    }
	}

</script>

<!-- 
  属性传值: 从父组件传值到子组件(标签可以有属性)
    1. 属性绑定<v-bind>
    2. 自定义属性<users> 
    3. props

  传值 & 传引用
  引用: Object Array
  传值: String, Number, Boolean ...


  事件传值: 从子组件传值到父组件
    1. 注册事件<$emit>
    2. 绑定事件<v-on:自定义事件>
    3. 实现方法及逻辑
  
 -->

<style scoped>
/* 样式的引入在index.html中引入 */
  #users{
  	width: 100%;
  	margin: 40px auto;
  	padding: 0 20px;
  	box-sizing: border-box;
  	max-width: 1200px;
  }
  ul{
  	display: flex;
  	flex-wrap: wrap;
  	list-style-type: none;
  	padding: 0;
  }
  li{
  	flex-grow: 1;
  	flex-basis: 300px;
  	text-align: center;
  	padding: 30px;
  	margin: 10px;
  	border: 1px solid lightblue;
  }
</style>




<template>
	<div id="users">
		<ul>
			<li v-on:click="user.show=!user.show" v-for="user in users">
				<h2>{{user.name}}</h2>
				<h3 v-show="user.show">{{user.position}}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
		    return {
		    	users:[
		    		{name:"dede",position:"WEB",show:false},
		    		{name:"titi",position:"前端",show:false},
		    		{name:"zhua",position:"开发",show:false},
		    		{name:"yt",position:"VR",show:false},
		    		{name:"zl",position:"Java",show:false},
		    		{name:"wang",position:"C++",show:false},
		    	],
		    }
		},
	    methods:{
	    	
	    }
	}

</script>

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




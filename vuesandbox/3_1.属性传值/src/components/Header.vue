<template>
	<header>
		<h1 v-on:click="changeTitle">{{title}}</h1>
	</header>
</template>

<script>
	export default {
		// props:{
		// 	title:{
		// 		type:String,
		// 		required:true
		// 	}
		// },
		data(){
		    return {
		      	title:"Vue Demo"
		    }
		},
	    methods:{
	    	changeTitle:function(){
	    		this.title = "Vue.js";
	    	}
	    },

	    // 生命周期钩子函数
    	beforeCreate(){
    		alert("在页面创建之前,还没创建!");
    	},
    	created(){
    		alert("开始创建页面,但页面还未显示!");
    	},
    	beforeMount(){
    		alert("页面创建完毕, 但页面还未显示!");
    	},
    	mounted(){
    		alert("执行完此方法,页面显示!");
    	},
    	beforeUpdate(){
    		alert("页面更改之前!");
    	},
    	updated(){
    		// alert("页面更改!");
    		this.changeTitle();
    	}
	    
	}

</script>

<style scoped>
  header{
  	background: lightpink;
  	padding: 10px;
  }
  h1{
  	color: #eee;
  	text-align: center;
  }
</style>



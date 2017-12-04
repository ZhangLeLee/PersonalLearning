<template>
	<header>
		<h1 v-on:click="changeTitle">{{title}}</h1>
	</header>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				required:true
			}
		},
		data(){
		    return {
		      	// title:"Vue Demo"
		    }
		},
	    methods:{
	    	changeTitle:function(){
	    		// this.title = "Vue.js";

          // 第一个参数是自定义事件名 第二个参数都是数据
          this.$emit("titleChange","dede")
	    	}
	    },
	    
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



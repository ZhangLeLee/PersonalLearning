<!-- 出版图书 -->
<template>
  	<div id="onlineread" class="bodyWidth row">
    	
  	</div> 
</template>

<script>
  	export default {
    	name:'onlineread',
    	data(){
    		return {
    			onlinereads:[],
    		}
    	},
    	created(){
    		this.$http.get('http://localhost:3000/books').then((res) => {
    			console.log(res.body);
    			this.onlinereads = res.body;
	       	});
    	}
  	}
</script>

<style>
  
</style>

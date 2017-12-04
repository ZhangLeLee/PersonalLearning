<template>
	<footer>
		<h3>{{footCon}}</h3>
	</footer>
</template>

<script>
	export default {
		data(){
		    return {
		      	footCon:"Copyright 2017 Vue.js!"
		    }
		},
	    methods:{
	    
	    }
	}

</script>

<style scoped>
  footer{
  	background: #eee;
  	padding: 30px;
  }
  h3{
  	color: #222;
	text-align: center;
  }
</style>




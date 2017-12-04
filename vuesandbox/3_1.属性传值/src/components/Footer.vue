<template>
	<footer>
		<h3>{{footCon}}{{title}}</h3>
	</footer>
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
		      	footCon:"Copyright 2017 "
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




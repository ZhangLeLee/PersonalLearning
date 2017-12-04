<template>
	<div id="users">
		<h1>Hello users!</h1>
		<ul>
			<li v-for="user in users">
				{{user}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
		    return {
		      	users:["dede","titi","zhaozhao"]
		    }
		},
	    methods:{
	    
	    }
	}

</script>


<style scoped>
  h1{
  	color: red;
  }
</style>

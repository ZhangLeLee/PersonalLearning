<template>
	<div id="users" class="container">
		<!-- 展示数据 -->
		<div class="card card-body bg-light">
			<div class="card-text"><h1>展示数据</h1></div>
		</div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th>姓名</th>
					<th>邮件</th>
					<th>电话</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user,index) in users">
					<td>{{user.name}}</td>
					<td>{{user.email}}</td>
					<td>{{user.tel}}</td>
					<td v-on:click="del(index)">×</td>
				</tr>
			</tbody>
		</table>

		<!-- 添加数据 -->
		<div class="card card-body bg-light mb-3">
			<div class="card-text"><h1>添加数据</h1></div>
		</div>

		<div class="card card-body bg-light mb-3">
			<div class="card-text form-group">
				<label>姓名</label>
				<input v-model="name" type="text" class="form-control" >
			</div>
		</div>
		<div class="card card-body bg-light mb-3">
			<div class="card-text form-group">
				<label>邮件</label>
				<input v-model="email" type="email" class="form-control">
			</div>
		</div>
		<div class="card card-body bg-light mb-3">
			<div class="card-text form-group">
				<label>电话</label>
				<input v-model="tel" type="text" class="form-control">
			</div>
		</div>
		<button class="btn btn-info" v-on:click="add">添加</button>
	</div>
</template>

<script>
	export default {
		data(){
		    return {
		    	name:"",
		    	email:"",
		    	tel:"",
		    	users:[
		    		{name:"dede",email:"dede@gmail.com",tel:123},
		    		{name:"titi",email:"titi@gmail.com",tel:123},
		    		{name:"zhua",email:"zhua@gmail.com",tel:123}
		    	]
		    }
		},
	    methods:{
	    	del:function(index){
	    		this.users.splice(index,1);
	    	},
	    	add:function(){
	    		// console.log(this.name);
	    		// console.log(this.email);
	    		// console.log(this.tel);
	    		var str = {name:this.name,email:this.email,tel:this.tel};
	    		this.users.push(str);
	    	}
	    }
	}

</script>

<style scoped>
 
</style>




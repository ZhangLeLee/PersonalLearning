<template>
  	<div id="add" class="container">
    	<h1 class="page-header">添加用户</h1>
    	<form v-on:submit="addCustomer">
    		<div class="well">
    			<h4>用户信息</h4>
    			<div class="form-group">
    				<label>姓名</label>
    				<input type="text" class="form-control" placeholder="name" v-model="customer.name">	
    			</div>
    			<div class="form-group">
    				<label>电话</label>
    				<input type="text" class="form-control" placeholder="phone" v-model="customer.phone">	
    			</div>
    			<div class="form-group">
    				<label>邮箱</label>
    				<input type="text" class="form-control" placeholder="email" v-model="customer.email">	
    			</div>
    			<div class="form-group">
    				<label>学历</label>
    				<input type="text" class="form-control" placeholder="education" v-model="customer.education">	
    			</div>
    			<div class="form-group">
    				<label>毕业学校</label>
    				<input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">	
    			</div>
    			<div class="form-group">
    				<label>职业</label>
    				<input type="text" class="form-control" placeholder="profession" v-model="customer.profession">	
    			</div>
    			<div class="form-group">
    				<label>个人简介</label>
    				<textarea rows="5" class="form-control" placeholder="profile" v-model="customer.profile"></textarea>
    			</div>
    			<button type="submit" class="form-control btn btn-primary">添加</button>
    		</div>
    	</form>
  	</div>
</template>

<script>
export default {
  	name: 'add',
  	data () {
    	return {
     		customer:{}
    	}
  	},
  	methods:{
  		addCustomer(e){
  			if(!this.customer.name || !this.customer.phone || !this.customer.email){
  				console.log("请输入相对应的信息");
  			} else {
  				let newCustomers = {
  					name:this.customer.name,
  					phone:this.customer.phone,
  					email:this.customer.email,
  					education:this.customer.education,
  					graduationschool:this.customer.graduationschool,
  					profession:this.customer.profession,
  					profile:this.customer.profile
  				};

  				this.$http.post("http://localhost:3000/users",newCustomers)
  					.then((res) => {
  						console.log(res);
  						this.$router.push()
  					})
  				e.preventDefault();
  			}
  			// 阻止默认事件
  			e.preventDefault();
  		}
  	}
}
</script>


<style scoped>

</style>

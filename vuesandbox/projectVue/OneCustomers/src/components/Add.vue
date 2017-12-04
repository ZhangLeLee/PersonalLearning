<template>
  <div id="add" class="container">
    <h1 class="text-muted">添加用户</h1>
    <br>
    <form v-on:submit="addCustomer">
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
          <input type="email" class="form-control" placeholder="email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label>个人简介</label>
        <textarea class="form-control" v-model="customer.profile"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">提交</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data(){
      return{
        customer:{}
      }
    },
    methods: {
      addCustomer:function(e){
//        console.log(123);
        if(!this.customer.name || !this.customer.phone || !this.customer.email){
          console.log("请输入正确的内容");
        } else {
          let newCustomer = {
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            profile:this.customer.profile
          };
          this.$http.post("http://localhost:3000/users",newCustomer)
            .then((res) => {
//              console.log(res);
//                路由跳转  $router - 超全局对象   router: 路由  query: 传对象信息
                this.$router.push({path:"/",query:{aalert:"用户添加成功"}});
            })
        }
        e.preventDefault();
      }
    }
  }
</script>

<style>

</style>

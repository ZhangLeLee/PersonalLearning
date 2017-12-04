<template>
  <div id="add" class="container">
    <h1 class="text-muted">添加用户</h1>
    <br>
    <form action="" v-on:submit="addCustomer">
       <div class="form-group">
         <label for="">姓名</label>
         <input type="text" class="form-control" placeholder="name" v-model="customer.name">
       </div>
      <div class="form-group">
        <label for="">电话</label>
        <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
      </div>
      <div class="form-group">
        <label for="">邮箱</label>
        <input type="text" class="form-control" placeholder="email" v-model="customer.email">
      </div>
      <div class="form-group">
        <label for="">个人简介</label>
        <textarea  rows="10" class="form-control" v-model="customer.profile"></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">添加</button>
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
    methods:{
      addCustomer:function(e){
//        console.log(123);
        if(!this.customer.name||!this.customer.phone||!this.customer.email){
          console.log("请输入对应的内容");
        }else{
          let newCustomer={
            name:this.customer.name,
            phone:this.customer.phone,
            email:this.customer.email,
            profile:this.customer.profile
          };
          this.$http.post("http://localhost:3000/users",newCustomer).then((res)=>{
            // console.log(res);
            // router路由跳转 router超全局对象
            // route 拿到数据
            this.$router.push({path:"/",query:{alert:"用户添加成功"}});
          })
        }
        e.preventDefault();
      }
    }
  }
</script>

<style>

</style>

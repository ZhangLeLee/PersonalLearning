<!--<template>-->
  <!--<div id="editor" class="container">-->
    <!--<h1 class="text-muted">修改用户信息</h1>-->
    <!--<br>-->


    <!--<form v-on:submit="addCustomer">-->
      <!--<div class="form-group">-->
        <!--<label>姓名</label>-->
        <!--<input type="text" class="form-control" v-bind:value="customer.key" v-model="customer.name">-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label>电话</label>-->
        <!--<input type="text" class="form-control" v-bind:value="customer.phone" v-model="customer.phone">-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label>邮箱</label>-->
        <!--<input type="email" class="form-control" v-bind:value="customer.email" v-model="customer.email">-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<label>个人简介</label>-->
        <!--<textarea class="form-control" v-bind:value="customer.profile" v-model="customer.profile"></textarea>-->
      <!--</div>-->
      <!--<button type="submit" class="btn btn-primary btn-block">提交</button>-->
    <!--</form>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name: 'editor',-->
    <!--data(){-->
      <!--return{-->
<!--//        id:this.$route.params.id, //路由参数(main.js)为啥, params后面接啥  route: 拿到路由器里的参数-->
        <!--customer:{}-->
      <!--}-->
    <!--},-->
    <!--methods:{-->
      <!--fetchCustomer:function(id){-->
        <!--this.$http.get("http://localhost:3000/users/"+id)-->
          <!--.then((res) => {-->
            <!--console.log(res);-->
            <!--this.customer = res.body;-->
          <!--})-->
      <!--},-->
      <!--addCustomer:function(e){-->
<!--//        console.log(123);-->
        <!--if(!this.customer.name || !this.customer.phone || !this.customer.email){-->
          <!--console.log("请输入正确的内容");-->
        <!--} else {-->
          <!--let newCustomer = {-->
            <!--name:this.customer.name,-->
            <!--phone:this.customer.phone,-->
            <!--email:this.customer.email,-->
            <!--profile:this.customer.profile-->
          <!--};-->
          <!--this.$http.post("http://localhost:3000/users",newCustomer)-->
            <!--.then((res) => {-->
<!--//              console.log(res);-->
<!--//                路由跳转  $router - 超全局对象   router: 路由  query: 传对象信息-->
              <!--this.$router.push({path:"/",query:{aalert:"用户添加成功"}});-->
            <!--})-->
        <!--}-->
        <!--e.preventDefault();-->
      <!--}-->

    <!--},-->
    <!--created(){-->
      <!--this.fetchCustomer(this.$route.params.id);-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->

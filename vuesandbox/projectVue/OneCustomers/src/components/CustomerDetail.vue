<!-- 实现功能: 删除 点击查看详情 -->
<template>
  <div id="detail" class="container">
    <!--{{id}}-->
    <router-link class="btn btn-link" to="/">返回</router-link>
    <h1 class="display-5 text-muted">
      {{customer.name}}
      <span class="float-right">
        <!--<router-link v-bind:to="/editor/+customer.id" class="btn btn-info">编辑</router-link>-->
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li v-for="(val,key) in customer" class="list-group-item">
        <strong>{{key}}:</strong>{{val}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data(){
      return{
//        id:this.$route.params.id, //路由参数(main.js)为啥, params后面接啥  route: 拿到路由器里的参数
        customer:{}
      }
    },
    methods:{
//      fetchCustomer(): 将从主页获取的id 对应的数据展示在本页面中(查看详情)
      fetchCustomer:function(id){
        this.$http.get("http://localhost:3000/users/"+id)
          .then((res) => {
//            console.log(res);
          this.customer = res.body;
          })
      },
//      deleteCustomer: 删除
      deleteCustomer(id){
        this.$http.delete("http://localhost:3000/users/"+id).then((res) => {
//          删除后跳转值主页面
          this.$router.push({path:"/",query:{delAlert:"删除成功"}});
        })
      },

    },
    created(){
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<style>

</style>

<template>
  <div id="customers" class="container">
    <Alert v-bind:message="alert" v-if="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <br>
    <input type="text" class="form-control" placeholder="根据姓名搜索内容..." v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="customer in filterCustomers(customers,filterInput)">
            <!--实-->
            <td>{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td>
              <router-link v-bind:to="/customerDetail/+customer.id">详情</router-link>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './alert'
  export default {
    name: 'customers',

    data(){
      return{
        customers:[],
        filterInput:"",
        alert:''
      }
    },
    methods:{
     fetchCustomers:function(){
       this.$http.get("http://localhost:3000/users").then((res)=>{
         this.customers=res.body;
       })
     },
      filterCustomers(customers,filterInput){
//       item是对象 里面的name是属性
        return customers.filter(function(item){
          return item.name.match(filterInput);
//          有的话返回 没有就过滤掉
        })
      }
    },
    created(){
      if(this.$route.query.alert){
        this.alert=this.$route.query.alert;
      }
      if(this.$route.query.delAlert){
        this.alert=this.$route.query.delAlert;
      }
      this.fetchCustomers();
    },
//    注册组件
    components:{
      Alert
    }

  }
</script>

<style>

</style>

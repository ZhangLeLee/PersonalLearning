<!-- 主页面 -->
<template>
  <div id="customers" class="container">
    <Alert v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <br>
    <input type="text" class="form-control" placeholder="根据姓名搜索内容" v-model="filterInput">
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
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td>
            <router-link v-bind:to="/customerDetail/+customer.id">点击查看详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'customers',
    data(){
      return {
        customers:[],
        filterInput:"",
        alert:"",
      }
    },
    methods:{
      fetchCustomers:function(){
//        请求JSONSERVER中的users数据
        this.$http.get("http://localhost:3000/users")
          .then((res) => {
//          console.log(res);
//          res.body是一个数组(请求到的数据)
            this.customers = res.body;
          })
      },
//      filterInput: 获取到的是当前页面input框中输入的内容
//      filter: 过滤, 删选; 返回过滤后的新数组
//      match: 在字符串内检索指定的值
      filterCustomers(customers,filterInput){
        return customers.filter(function(item){
          return item.name.match(filterInput);
        })
      }
    },
    created(){
//      在页面加载之前先获取传过来的数据( 在主页面内 提示添加成功 删除成功 )
      if(this.$route.query.aalert){
        this.alert = this.$route.query.aalert;
      }

      if(this.$route.query.delAlert){
        this.alert = this.$route.query.delAlert;
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

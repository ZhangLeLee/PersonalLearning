<template>
  <div id="detail" class="container">
    <router-link class="btn btn-link" to="/">返回上一页</router-link>
    <h1 class="display-4 text-muted">
      {{customer.name}}
      <span class="float-right">
        <router-link class="btn btn-info" v-bind:to="/editor/+customer.id">编辑</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val,key) in customer">
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
//        id:this.$route.params.id
        //route 拿数据
        customer:{}
      }
  },
    methods: {
      fetchCustomer: function (id) {
        this.$http.get("http://localhost:3000/users/"+id).then((res) => {
          this.customer = res.body;
        })
      },
     //更新是put
      deleteCustomer(id){
        this.$http.delete("http://localhost:3000/users/"+id).then((res)=>{
          this.$router.push({path:"/",query:{delAlert:"删除成功"}});
        })
      }
    },
    created(){
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<style>

</style>

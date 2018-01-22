<template>
  <div id="customers" class="container">
    <h1 class="page-header">用户管理系统</h1>
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
        <tr v-for="customer in customers">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
      customers:[]
    }
  },
  methods:{
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users")
      .then((res) => {
        this.customers = res.data;
        console.log(this.customers);
        // console.log(typeof(res.data));    // Object
      }).catch((err) => {
        // console.log("获取信息失败")
        console.log(err);
      })
    }
  },
  created(){
    this.fetchCustomers();
  }
}
</script>


<style scoped>

</style>

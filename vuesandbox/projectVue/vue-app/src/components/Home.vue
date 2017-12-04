<template>
  <div id="home">
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <app-users v-bind:usersData="users"></app-users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

  // 引入文件
  import Header from './Header'
  import Footer from './Footer'
  import Users from './Users'

  export default {
    name: 'home',   // 对应 main.js 中的 template: '<App/>',
    // 注册
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-users": Users
    },
    data() {
      return {
        users: [],
        title: "AngularJS"
      }
    },
    methods: {
      updateTitle: function (upTitle) {
        this.title = upTitle;
        // console.log(this);
      }
    },
    created(){   // 页面展示之前获取数据
      this.$http.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
//          console.log(res);
          this.users = res.body;
        })
    }
  }

</script>


<style scoped>

</style>









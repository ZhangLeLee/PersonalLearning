<template>
  <div id="app">
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <app-users v-bind:usersData="users"></app-users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

// 引入文件
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'

export default {
  name: 'app',   // 对应 main.js 中的 template: '<App/>',
  // 注册
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-users":Users
  },
  data(){
    return {
      users:[
            {name:"dede",position:"WEB",show:false},
            {name:"titi",position:"前端",show:false},
            {name:"zhua",position:"开发",show:false},
            {name:"yt",position:"VR",show:false},
            {name:"zl",position:"Java",show:false},
            {name:"wang",position:"C++",show:false},
          ],
      title:"AngularJS"
    }
  },
  methods:{
    updateTitle:function(upTitle){
      this.title = upTitle;
      // console.log(this);
    }
  }
}

</script>


<style scoped>
  
</style>









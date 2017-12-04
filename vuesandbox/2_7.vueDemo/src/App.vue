<template>
  <div id="app">
    <app-header></app-header>
    <app-users></app-users>
    <app-footer></app-footer>
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
      
    }
  },
  methods:{
    
  }
}

</script>


<style scoped>
  
</style>









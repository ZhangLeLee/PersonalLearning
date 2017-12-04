<template>
  <div id="app">
    <users></users>
  </div>
</template>

<script>

import Users from './components/Users'

export default {
  name: 'app',   // 对应 main.js 中的 template: '<App/>',
  components:{
    "users": Users
  },
  data(){
    return {
      
    }
  },
  methods:{
    
  }
}

</script>


<style>
  
</style>


<!-- 
  组件嵌套至少有两个组件 (包括根组件)
  全局组件: 需要在main.js注册, 注册后可以在任何有关联的组件中使用局部组件
  局部组件: 那个组件引入, 就在那个组件中使用

  嵌套流程:
    1. 设计组件内容
    2. 在引入组件中<app.vue>,script里import上方组件
    3. 在引入组件中<app.vue>, export里components进行注册
    4. 在引入组件template中<app.vue>, 进行使用<users></users>
 -->







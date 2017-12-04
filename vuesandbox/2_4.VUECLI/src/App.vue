<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      title:"this is our first cli project"
    }
  },
  methods:{
    greeting:function(){
      return "Hello Vue.js!";
    }
  }
}

</script>


<style>
  
</style>

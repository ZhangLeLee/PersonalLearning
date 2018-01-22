<template>
  <div id="blog-header">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/" >个人博客</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">博客主页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">添加博客</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              Welcome!
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br>
  </div>
</template>

<script>
  export default{
    name:"blog-header"
  }
</script>

<style>

</style>

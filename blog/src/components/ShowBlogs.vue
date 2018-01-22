<template>
  <div v-theme:column="'narrow'" id="show-blogs" class="container">
    <h2>博客总览</h2>
    <input class="form-control" type="text" placeholder="请输入搜索的内容" v-model="search">
    <br>
    <div v-for="blog in filteredBlogs" class="card card-body mb-4">
      <router-link v-bind:to="/blog/+blog.id">
        <h4 v-rainbow>{{blog.title | to-uppercase}}</h4>
      </router-link>

      <blockquote class="blockquote clearfix">
        <p>{{blog.content | snippet}}</p>
        <footer class="blockquote-footer float-right">Author: <cite title="Source Title">{{blog.author}}&nbsp;&nbsp;&nbsp;&nbsp;</cite></footer>
      </blockquote>


    </div>

  </div>
</template>

<script>

  export default {
    name:'show-blogs',
    data(){
      return{
        blogs:[],
        search:"",

      }
    },
    created(){
//      本地json只能放在static文件夹下, 否则请求不到数据
      this.$http.get('http://localhost:3000/users/').then((res) => {
//        console.log(res.body);
        this.blogs = res.body.slice(0,10);
//        console.log(this.blogs);
      })
    },
    computed:{
      filteredBlogs: function(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    filters:{
//      "to-uppercase":function(value){
//        return value.toUpperCase();
//      },
      toUppercase(value){
        return value.toUpperCase();
      },
    },
    directives:{
      'rainbow':{
        bind(el,binding,vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2,8);
        }
      }
    }
  }
</script>

<style>

</style>

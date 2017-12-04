<template>
  <div id="single-blog" class="container">
      <h2>博客详情</h2>
      <div class=card>
        <div class="card-header">
          <h3>{{blog.title}}</h3>
        </div>
        <div class="card-body">
          <p><strong>主题: </strong>{{blog.title}}</p>
          <p><strong>内容: </strong>{{blog.content}}</p>
          <p><strong>作者: </strong>{{blog.author}}</p>
        </div>
        <div class="card-footer">
          <router-link v-bind:to="/editor/+blog.id">编辑</router-link>
          <button class="btn btn-info" v-on:click="deleteBlog(blog.id)">删除</button>
        </div>
      </div>
  </div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id,
        blog:{}
      }
    },
    methods:{
      deleteBlog:function(id){
        this.$http.delete("http://localhost:3000/users/"+id).then(() => {
          this.$router.push({path:"/"});
        })
      }
    },
    created(){
      this.$http.get('http://localhost:3000/users/'+this.id).then((res) => {
        this.blog = res.body;
      })
    }
  }
</script>

<style>

</style>

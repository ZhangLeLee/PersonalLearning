<template>
  <div id="editor" class="container">
    <h1 class="text-muted">编辑用户</h1>
    <br>
    <form action="" v-on:submit="addBlog">
      <div class="form-group">
        <label>主题</label>
        <input type="text" class="form-control" v-model="blog.title">
      </div>
      <div class="form-group">
        <label>内容</label>
        <textarea class="form-control" v-model="blog.content"></textarea>
      </div>
      <div class="form-group">
        <label>作者</label>
        <input type="text" class="form-control" v-model="blog.author">
      </div>
      <button type="submit" class="btn btn-primary btn-block">修改</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'editor',
    data(){
      return{
        blog:{}
      }
    },
    methods:{
      fetchBlog:function(id){
        this.$http.get("http://localhost:3000/users/"+id)
          .then((res) => {
            this.blog = res.body;
          })
      },
      addBlog:function(e){
        if(!this.blog.title||!this.blog.content||!this.blog.author){
          console.log("请输入对应的内容");
        }else{
          let newBlog={
            title:this.blog.title,
            content:this.blog.content,
            author:this.blog.author,
          };
          this.$http.put("http://localhost:3000/users/"+this.blog.id,newBlog).then((res)=>{
            this.$router.push({path:"/"});
          })
        }
        e.preventDefault();
      },
    },
    created(){
      this.fetchBlog(this.$route.params.id);
    }
  }
</script>

<style>

</style>

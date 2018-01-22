<template>
  <div id="add-blog" class="container">
    <h2>添加博客</h2>
    <form v-if="!submited">    <!--为真时, alert展示-->
      <div class="form-group">
        <label>博客标题</label>
        <input type="text" class="form-control" v-model="blog.title" required />
      </div>

      <div class="form-group">
          <label>博客内容</label>
          <textarea class="form-control" v-model="blog.content"></textarea>
      </div>

      <div id="checkboxes">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="Vue.js" v-model="blog.categories">
            Vue.js &nbsp;&nbsp;&nbsp;
          </label>

        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Node.js" v-model="blog.categories">
          Node.js&nbsp;&nbsp;&nbsp;
        </label>

        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="React.js" v-model="blog.categories">
          React.js&nbsp;&nbsp;&nbsp;
        </label>

        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Angular4" v-model="blog.categories">
          Angular4
        </label>
      </div>

      <div class="form-group">
        <label>作者</label>
        <select class="form-control" v-model="blog.author">
          <option v-for="author in authors">
            {{author}}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-secondary float-right" v-on:click.prevent="post">添加博客</button>

    </form>
    <br>
    <div v-if="submited" class="alert alert-success alert-dismissible fade show" role="alert">
      您 的 博 客 添 加 成 功 ! &nbsp;&nbsp;<router-link to="/" class="text-danger">点击此处返回首页查看</router-link>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <br><br>
    <div class="card card-body bg-light">
      <div>
        <h3>博客总览</h3>
        <p>博客标题: {{blog.title}}</p>
        <p>博客内容: </p>
        <p>{{blog.content}}</p>
        <p>博客分类: </p>
        <ul>
          <li v-for="category in blog.categories">
            {{category}}
          </li>
        </ul>
        <p>作者: {{blog.author}} </p>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },
        authors:["dede","titi","chaochao"],
        submited:false   //判断是否提交
      }
    },
    methods:{
      post:function(){
        this.$http.post("http://localhost:3000/users/",this.blog).then((res) => {
//          console.log(res);
          this.submited = true;
        })
      },
    }
  }
</script>

<style scoped>

</style>

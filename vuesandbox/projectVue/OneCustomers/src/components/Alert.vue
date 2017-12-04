<template>
  <div id="alert" class="container">
    <!-- 插入 删除提示 -->
    <div v-if="message" class="alert alert-warning alert-dismissible fade show" role="alert">
      {{message}}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    props:{
      message:{
        type:String,
        required:true
      }
    }
  }
</script>

<style>

</style>

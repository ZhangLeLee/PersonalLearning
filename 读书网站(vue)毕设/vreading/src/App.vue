<template>
  <div id="app">
    <read-header></read-header>
    <router-view></router-view>
    <read-footer></read-footer>
  </div>
</template>

<script>
import ReadHeader from './components/ReadHeader'
import ReadFooter from './components/ReadFooter'

export default {
  name: 'app',
  components: {
    ReadHeader,ReadFooter
  },
}
</script>

<style>
@import url("../src/assets/css/index.css");
@import url("../src/assets/page/page.css");
</style>

<!-- 资讯 -->
<template>
	<div id="consultation" class="bodyWidth">
		<div class="newsNav btn-group my-3">
			<router-link to="/consultation" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;新闻&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/booknews" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;书讯&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/bookreview" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;书评&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/history" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;历史&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/culture" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;文化&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/art" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;艺术&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/character" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;人物&nbsp;&nbsp;</router-link>
			<router-link to="/consultation/digest" class="btn btn-light btn-sm px-4">&nbsp;&nbsp;书摘&nbsp;&nbsp;</router-link>
		</div>
		<router-view></router-view>
	</div> 
</template>

<script>
	export default {
		name:'consultation',
		data(){
			return {
				booknews:[],
				bookreviews:[],
				historys:[],
				cultures:[],
				arts:[],
				characters:[],
				digests:[]
			}
		},
		
	}


</script>



<style>
  
</style>

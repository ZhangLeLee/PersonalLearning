<!-- 咨询 - 历史 -->
<template>
  	<div id="history" class="row">
    	<div class="col-8">
			<h4 class="zH4 textbody bgH4 py-3"><i class="fa fa-list-ul"></i>&nbsp;&nbsp;&nbsp;历史</h4>
			<!-- 数据信息 -->
			<div class="row" v-for="myNew in news">
				<div class="col-4">
					<img class="newscon-img my-4" v-bind:src="myNew.newsUrl" alt="">
				</div>
				<div class="col-8">
					<div class="my-4">
						<router-link v-bind:to="'consultationInfo/'+myNew.conId" class="h5 newscon-h5 fontColor">{{myNew.newsTitle}}</router-link>
						<p class="newscon-p my-2">{{myNew.newsCon}}</p>
						<div class="clearfix newscon-span mt-3">
							<span class="float-left">{{myNew.newsSource}}</span>
							<span class="float-right">{{myNew.newsTime}}</span>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="col-4">
			<consultation-side></consultation-side>
		</div>
 	</div> 
</template>

<script>
import ConsultationSide from './ConsultationSide';
  	export default {
    	name:'history',
    	components:{
	    	ConsultationSide
	    },
    	data(){
	    	return {
	    		news:[]
	    	}
	    },
	    created(){
			// 获取新闻资讯数据
			this.$http.get('http://localhost:3000/consultation').then((res) => {
	       		for (var i = 0; i < res.body.length; i++) {
	       			if(res.body[i].conCategory == "history"){
	       				this.news.push(res.body[i]);
	       			}
	       		}
	       		// console.log(this.news);
	       	})
		}
  	}
</script>

<style>
  
</style>

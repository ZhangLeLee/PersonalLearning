<template>
  	<div id="consultation-side">
		<!-- swiper 轮播图 -->
		<div class="swiper-container mySwiper border" id="swiperCon">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad5.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad2.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad3.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad4.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad1.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad6.jpg" alt="">
				</div>
			</div>
		</div>
		<div class="swiper-container mySwiper border" id="swiperNav">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad5.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad2.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad3.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad4.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad1.jpg" alt="">
				</div>
				<div class="swiper-slide">
				 	<img src="../assets/adimages/ad6.jpg" alt="">
				</div>
			</div>
		</div>
		<!-- 热门文章排行 -->
		<div class="my-4">
			<i class="lead">热门文章排行</i>
			<div class="borderline2"></div>
			<div class="side2-box" v-for="(hot,index) in hots">
				<div class="side2-con">
					<div class="clearfix py-2">
						<i class="mr-2">{{index+1}}</i>
						<router-link class="side2-conRouter fontColor" v-bind:to="'consultationInfo/'+hot.conId">{{hot.newsTitle}}</router-link>
						<div class="fontColor ml-4">{{hot.newsCon | snippetMd}}</div>
					</div>
					<div class="borderline"></div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
  	export default {
	    name:'consultation-side',
	    data(){
	    	return {
	    		hots:[],
	    		num:[1,2,3,4,5,6,7,8,9,10]
	    	}
	    },
	    created(){
			// 获取新闻资讯数据
			this.$http.get('http://localhost:3000/consultation').then((res) => {
				// 根据热度将数据进行排序
				function sortBy(field) {
				    return function(a,b) {
				        return a[field] - b[field];
				    }
				}
				res.body.sort(sortBy("like"));
				this.hots = res.body.reverse().slice(0,10);
	       	})

	       	// $ref

	       	// card 导航 轮播 

	       	// input select textarea 数据双向绑定

	       	$(function($){
	       		// 轮播图效果实现
	       		var swiperCon = new Swiper('#swiperCon',{
	       			loop:true,
	       			autoplay:1000,
	       		});
	       		var swiperNav = new Swiper('#swiperNav',{
	       			loop:false,
	       			slidesPerView:6.5
	       		});
	       		$("#swiperNav img").css({"border":"2px solid white"});
	       		$("#swiperNav img")[0].style.border = "2px solid #00B2EE";
				swiperCon.on("onSlideChangeEnd",function(swiperCon){
					swiperNav.slideTo(swiperCon.realIndex,1000,false);
					$("#swiperNav img").css({"border":"2px solid white"});
					$("#swiperNav img")[swiperCon.realIndex].style.border = "2px solid #00B2EE";
				})


	       	})
		}
  	}
</script>

<style>
</style>

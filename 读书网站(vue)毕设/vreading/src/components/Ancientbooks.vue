<!-- 国学/古籍 -->
<template>
  	<div id="ancientbooks" class="bodyWidth row">
    	<div class="col-3 my-3">
	    	<div class="btn-group-vertical w-100 mb-3">
	    		<button v-on:click="selectData(historySection)" to="" class="chineseNav py-3 btn btn-light borderddd textbody" style="border-top:2px solid #61abaa;" ><i class="fa fa-language mr-2"></i> 史部</button>
				<button v-on:click="selectData(zibu)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 子部</button>
				<button v-on:click="selectData(ji)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 集部</button>
				<button v-on:click="selectData(poetry)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 诗部</button>
				<button v-on:click="selectData(Confucianism)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 儒部</button>
				<button v-on:click="selectData(Dept)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 易部</button>
				<button v-on:click="selectData(Medicine)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 医部</button>
				<button v-on:click="selectData(TheBuddhaDivision)" to="" class="chineseNav py-3 btn btn-light borderddd textbody" style="border-bottom:2px solid #61abaa;"><i class="fa fa-language mr-2"></i> 佛部</button>
			</div>
			<i class="fontColor lead">图书精彩推荐</i>
			<div class="borderddd">
				<div class="tuijian-right" v-for="(bookRecommendation,index) in bookRecommendations">
					<div class="tuijianSide">
						<div class="sideHorver clearfix">
							<i class="mr-2">{{index+1}}</i>
							<img v-bind:src="bookRecommendation.booksUrl" alt="">
							<span class="px-2">{{bookRecommendation.booksTitle | bookSnippet}}</span>
						</div>
						<div class="borderline"></div>
					</div>
				</div>
				<div class="tuijianMore">
					<div>
						<i class="fa fa-arrow-right"></i>
						<span>查看更多</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-9 my-3">
			<div class="card mb-3">
				<img src="../assets/logoimages/guoxue.png" alt="">
			</div>
			<div class="card card-body">
				<div id="wrap">
				<!-- 分页数据 -->
				<!-- <div v-show="show" v-for="result in perPageDatas">
					<div class="chineseBox w-50 mb-3 float-left">
						<img class="float-left mr-4" v-bind:src="result.booksUrl" alt="">
						<router-link class="fontColor chineseBoxRouter" to="">{{result.booksTitle}}</router-link>
						<p class="mt-4">{{result.author}}</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{result.conInfo | snippet}}</p>
						<span class="fontColor">立即阅读 > </span>
					</div>
				</div>
				 -->
				
				<div v-for="result in result">
					<div class="chineseBox w-50 mb-3 float-left">
						<img class="float-left mr-4" v-bind:src="result.booksUrl" alt="">
						<router-link class="fontColor chineseBoxRouter" to="">{{result.booksTitle}}</router-link>
						<p class="mt-4">{{result.author}}</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{result.conInfo | snippet}}</p>
						<span class="fontColor">立即阅读 > </span>
					</div>
				</div>
				<!-- 分页按钮 -->
				<div class="btn-group">
					<button class="btn btn-paimary" v-for="page in pages" v-on:click="getProductsPerpage(page)">{{page}}</button>
				</div>
				</div>
			</div> 
		</div>
  	</div> 
</template>
<script>
  	export default {
    	name:'ancientbooks',
    	data(){
    		return {
    			ancientbooks:[],
    			result:[],
    			historySection:"historySection",
    			zibu:"zibu",
    			ji:"ji",
    			poetry:"poetry",
    			Confucianism:"Confucianism",
    			Dept:"Dept",
				Medicine:"Medicine",
				TheBuddhaDivision:"TheBuddhaDivision",
				// 分页
				pages:[],
				perPageDatas:[],
				bookRecommendations:[]
    		}
    	},
    	methods:{
    		selectData(classSelect){
    			this.result = [];
    			for(var i = 0; i < this.ancientbooks.length; i++){
    				if(this.ancientbooks[i].classification == classSelect){
    					this.result.push(this.ancientbooks[i]);
    				}
    			}
    			return this.result;
    		},
   //  		// 处理分页
   //  		myPages(data){
   //  			var count = data.length/4;
			// 	var pages = [];
			// 	for (var i = 0; i < count; i++) {
			// 		pages.push(i+1);
			// 	}
			// 	this.pages = pages;
   //  		},
   //  		// 处理分页数据
   //  		getProductsPerpage(page){
			// 	var perPageDatas = [];
			// 	for (var i = (page-1)*4; i < Math.min(this.ancientbooks.length,page*4); i++) {
			// 		perPageDatas.push(this.ancientbooks[i]);
			// 	}
			// 	this.perPageDatas = perPageDatas;
			// 	console.log(this.perPageDatas);
			// }
    	},
    	created(){
    		// 获取国学书籍数据
    		this.$http.get('http://localhost:3000/books').then((res) => {
    			this.bookRecommendations = res.body.slice(0,10);
	       		for (var i = 0; i < res.body.length; i++) {
	       			if(res.body[i].category == "chinesebooks"){
	       				this.ancientbooks.push(res.body[i]);
	       			}
	       		}
	       		this.result = this.ancientbooks;
	       		// this.myPages(this.ancientbooks);
	       	});
	       	
	       	$(function($){
	       		// hover 实现
				$(".sideHorver img")[0].style.display = "block";
				$(".sideHorver i")[0].style.color = "rgb(186,97,90)";
				$(".sideHorver i")[0].style.fontSize = "16px";
				$(".sideHorver span")[0].style.fontSize = "16px";
				$(".sideHorver").each(function(i){
					$(this).mouseover(function(){
						$(".sideHorver i").css({"color":""});
						$(".sideHorver i").css({"font-size":""});
						$(".sideHorver img").css({"display":"none"});
						$(".sideHorver span").css({"font-size":""});
						$(".sideHorver i")[i].style.color = "rgb(186,97,90)";
						$(".sideHorver i")[i].style.fontSize = "16px";
						$(".sideHorver img")[i].style.display = "block";
						$(".sideHorver span")[i].style.fontSize = "16px";
					});
				})
	       	})
    	}
  	}
</script>

<style>
  
</style>

<!-- 出版图书 -->
<template>
  	<div id="publishingbooks" class="bodyWidth row">
    	<div class="col-3 my-3">
    		<div class="btn-group-vertical w-100 mb-3">
	    		<button v-on:click="selectData(novel)" to="" class="chineseNav py-3 btn btn-light borderddd textbody" style="border-top:2px solid #61abaa;" ><i class="fa fa-language mr-2"></i> 小说</button>
				<button v-on:click="selectData(psychology)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 心理</button>
				<button v-on:click="selectData(encourage)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 励志</button>
				<button v-on:click="selectData(youth)" to="" class="chineseNav py-3 btn btn-light borderddd textbody"><i class="fa fa-language mr-2"></i> 青年文摘</button>
				<button v-on:click="selectData(chinesebooks)" to="" class="chineseNav py-3 btn btn-light borderddd textbody" style="border-bottom:2px solid #61abaa;"><i class="fa fa-language mr-2"></i> 国学古籍</button>
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
    		<div class="card card-body">
    			<div>
				<div v-for="result in result">
					<div class="chineseBox w-50 mb-3 float-left">
						<img class="float-left mr-4" v-bind:src="result.booksUrl" alt="">
						<router-link class="fontColor chineseBoxRouter" to="">{{result.booksTitle}}</router-link>
						<p class="mt-4">{{result.author}}</p>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{result.conInfo | snippet}}</p>
						<span class="fontColor">立即阅读 > </span>
					</div>
				</div>
				</div>
			</div> 
    	</div>	
  	</div> 
</template>

<script>

  	export default {
    	name:'publishingbooks',
    	data(){
    		return {
    			result:[],
    			publishingbooks:[],
    			bookRecommendations:[],
    			novel:"novel",
    			psychology:"psychology",
    			encourage:"encourage",
    			youth:"youth",
    			chinesebooks:"chinesebooks"
    		}
    	},
    	methods:{
    		selectData(classSelect){
    			this.result = [];
    			for(var i = 0; i < this.publishingbooks.length; i++){
    				if(this.publishingbooks[i].category == classSelect){
    					this.result.push(this.publishingbooks[i]);
    				}
    			}
    			return this.result;
    		},
    	},
    	created(){
    		this.$http.get('http://localhost:3000/books').then((res) => {
    			this.result = res.body;
    			this.publishingbooks = res.body;
    			this.bookRecommendations = res.body.slice(0,10);
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

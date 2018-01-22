<template>
	<div id="home" class="bodyWidth">
		<div class="row mt-3 no-gutters">
			<div class="col-6 pr-2">
				<!-- 轮播图 -->
				<div class="carousel slide mb-5" id="slide3" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#slide3" data-slide-to="0" class="active"></li>
						<li data-target="#slide3" data-slide-to="1"></li>
						<li data-target="#slide3" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img class="d-block w-100" src="../assets/images/lunbo1.jpg" alt="First Slide">
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="../assets/images/lunbo2.png" alt="Second Slide">
						</div>
						<div class="carousel-item">
							<img class="d-block w-100" src="../assets/images/lunbo3.jpg" alt="Third Slide">
						</div>
					</div>
					<a class="carousel-control-prev" href="#slide3" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#slide3" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
			<div class="col-2">
				<div class="ads">
					<a href="#"><img src="../assets/images/ad1.png" alt=""></a>
					<a href="#"><img src="../assets/images/ad2.png" alt=""></a>
					<a href="#"><img src="../assets/images/ad3.png" alt=""></a>
				</div>
			</div>
			<div class="col-4">
				<!-- 选项卡 -->
				<div class="zTab">
					<div class="menu d-flex justify-content-around">
						<div xxx="c1" class="tabNav pb-2 w-100 current fontColor" style="border-bottom:2px solid rgb(81,156,154)">图书分类</div>
						<div xxx="c2" class="tabNav pb-2 w-100 fontColor">国学经典</div>
						<div xxx="c3" class="tabNav pb-2 w-100 fontColor">读书导航</div>
					</div>
					<div class="content">
						<div id="c1">
							<table class="ztable mt-3">   <!-- 图书分类 -->
								<tbody class="ztableOne">
									<tr class="d-flex justify-content-around">
										<td>国学入门</td>
										<td>文学史</td>
										<td>纪实文学</td>
										<td>散文随笔</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>世界名著</td>
										<td>外国小说</td>
										<td>言情小说</td>
										<td>历史小说</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>当代小说</td>
										<td>网络小说</td>
										<td>青春言情</td>
										<td>任务传记</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>艺术理论</td>
										<td>书法/篆刻</td>
										<td>绘画</td>
										<td>收藏鉴赏</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>收藏时尚</td>
										<td>社会科学</td>
										<td>法律</td>
										<td>少儿/儿童</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>人为社科</td>
										<td>历史</td>
										<td>经济管理</td>
										<td>工业技术</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>计算机</td>
										<td>励志</td>
										<td>杂志</td>
										<td>更多 <i class="fa fa-arrow-right"></i></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div id="c2" class="hide">
							<table class="ztable mt-3">  <!-- 国学经典 -->
								<tbody class="ztableTwo">
									<tr class="d-flex justify-content-around">
										<td>红楼梦</td>
										<td>西游记</td>
										<td>三国演义</td>
										<td>水浒传</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>史记</td>
										<td>资治通鉴</td>
										<td>大学</td>
										<td>中庸</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>论语</td>
										<td>孟子</td>
										<td>诗经</td>
										<td>尚书</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>仪礼</td>
										<td>周易</td>
										<td>春秋左传</td>
										<td>尔雅</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>孝经</td>
										<td>国语</td>
										<td>战国策</td>
										<td>孟子</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>庄子</td>
										<td>孙子兵法</td>
										<td>楚辞</td>
										<td>古文观止</td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td>吕氏春秋</td>
										<td>世说新语</td>
										<td>唐诗/宋词</td>
										<td>更多 <i class="fa fa-arrow-right"></i></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div id="c3" class="hide">
							<!-- 读书导航 -->
							<table class="ztable mt-3">   <!-- 图书分类 -->
								<tbody class="ztableThree">
									<tr class="d-flex justify-content-around">
										<td><img src="../assets/images/Lamazon.jpg" alt=""><label>亚马逊</label></td>
										<td><img src="../assets/images/Lchaoxing.jpg" alt=""><label>超星</label></td>
										<td><img src="../assets/images/Ldangdang.jpg" alt=""><label>当当</label></td>
										<td><img src="../assets/images/Ldouban.jpg" alt=""><label>豆瓣</label></td>
										<td><img src="../assets/images/Lduokan.jpg" alt=""><label>多看</label></td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td><img src="../assets/images/Lguotu.jpg" alt=""><label>国图</label></td>
										<td><img src="../assets/images/Ljingdong.jpg" alt=""><label>京东</label></td>
										<td><img src="../assets/images/Lqikan.jpg" alt=""><label>期刊</label></td>
										<td><img src="../assets/images/Lwangyiyun.jpg" alt=""><label>网易云</label></td>
										<td><img src="../assets/images/Lxinlang.jpg" alt=""><label>新浪</label></td>
									</tr>
									<tr class="d-flex justify-content-around">
										<td><img src="../assets/images/Lzhangyue.jpg" alt=""><label>掌阅</label></td>
										<td><img src="../assets/images/Lzhiwang.jpg" alt=""><label>知网</label></td>
										<td><img src="../assets/images/Lqidian.jpg" alt=""><label>起点</label></td>
										<td><img src="../assets/images/Lzongheng.jpg" alt=""><label>纵横</label></td>
										<td><img src="../assets/images/more.png" alt=""><label>更多</label></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div> 
					<!-- 内容结束 -->  
				</div>
				<!-- 选项卡结束 -->
			</div>
		</div>

		<!-- 读书资讯 -->
		<div class="mb-5">
			<div class="home-readAndcons clearfix mb-2">
				<h5 class="fontColor float-left">读书资讯</h5>
				<div class="float-right">
					<router-link to="/consultation" class="fontColor px-2"> 新闻 </router-link> <i> / </i>
					<router-link to="/consultation/booknews" class="fontColor px-2"> 书讯 </router-link> <i> / </i> 
					<router-link to="/consultation/bookreview" class="fontColor px-2"> 书评 </router-link> <i> / </i> 
					<router-link to="/consultation/history" class="fontColor px-2"> 历史 </router-link> <i> / </i> 
					<router-link to="/consultation/culture" class="fontColor px-2"> 文化 </router-link> <i> / </i>
					<router-link to="/consultation/art" class="fontColor px-2"> 艺术 </router-link> <i> / </i> 
					<router-link to="/consultation/character" class="fontColor px-2"> 人物 </router-link> <i> / </i> 
					<router-link to="/consultation/digest" class="fontColor px-2"> 书摘 </router-link> 
		 	 	</div>
			</div>
			<div class="card card-body">
				<div class="readAndcBox d-flex justify-content-around">
					<div class="w-25 ml-3" v-for="readAndc in readAndcons">
						<div>
							<img class="text-center d-block mb-2" v-bind:src="readAndc.newsUrl" alt="">
							<router-link v-bind:to="'consultation/consultationInfo/'+readAndc.conId" class="zh6 fontColor">{{readAndc.newsTitle | snippet}}</router-link>
							<p class="mr-4 mt-1 mb-3">{{readAndc.newsCon | snippetSm}}</p>
							<div class="eyesAndthunbs">
								<i class="fa fa-eye"></i> {{readAndc.eye}}
								<i class="ml-2 fa fa-thumbs-o-up"></i> {{readAndc.like}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 在线读书 -->
		<div class="mb-5">
			<div class="home-readAndcons clearfix mb-2">
				<h5 class="fontColor float-left">在线读书</h5>
				<div class="float-right">
					<router-link to="" class="fontColor">更多 ></router-link>
		 	 	</div>
			</div>
			<div class="card card-body">
				<div class="onlineBook-box clearfix ml-2">
					<div class="float-left ml-3 mr-1 mb-2" v-for="onlineBook in onlineBooks">
						<div>
							<img class="mb-2" v-bind:src="onlineBook.booksUrl" alt="">
							<router-link to="" class="zh6 fontColor ml-2 chineseBoxRouter">{{onlineBook.booksTitle}}</router-link>
							<p class="ml-2">{{onlineBook.author}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 推荐新书 -->
		<div class="mb-5 row">
			<div class="col-8">
				<div class="home-readAndcons clearfix mb-2">
					<h5 class="fontColor float-left">推荐新书</h5>
					<div class="float-right">
						<router-link to="" class="fontColor">更多 ></router-link>
			 	 	</div>
				</div>
				<div class="card card-body">
					<div class="onlineBook-box clearfix ml-2">
						<div class="float-left ml-1 mb-2" v-for="tuijian in tuijians">
							<div>
								<img class="mb-2" v-bind:src="tuijian.booksUrl" alt="">
								<router-link to="" class="zh6 fontColor ml-2 chineseBoxRouter">{{tuijian.booksTitle}}</router-link>
								<p class="ml-2">{{tuijian.author}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 图书推荐 -->
			<div class="col-4">
				<div class="home-readAndcons clearfix mb-2">
					<h5 class="fontColor float-left">图书推荐</h5>
				</div>
				<div class="borderddd">
					<div class="tuijian-right" v-for="tuijianRight in tuijianRights">
						<div class="tuijianSide">
							<div class="sideHorver clearfix">
								<i>0{{tuijianRight.booksId}}</i>
								<img v-bind:src="tuijianRight.booksUrl" alt="">
								<span class="px-2">{{tuijianRight.booksTitle}}</span>
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
		</div>
		
		<!-- 国学古籍 -->
		<div class="mb-5 row">
			<div class="col-8">
				<div class="home-readAndcons clearfix mb-2">
					<h5 class="fontColor float-left">国学/古籍</h5>
					<div class="float-right">
						<router-link to="" class="fontColor">更多 ></router-link>
			 	 	</div>
				</div>
				<div class="card card-body">
					<div>
						<div v-for="chineseBook in chineseBooks">
							<div class="chineseBox float-left w-50 mb-3">
								<img class="float-left mr-4" v-bind:src="chineseBook.booksUrl" alt="">
								<router-link class="fontColor chineseBoxRouter" to="">{{chineseBook.booksTitle}}</router-link>
								<p class="mt-4">{{chineseBook.author}}</p>
								<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{chineseBook.conInfo | fourData}}</p>
								<span class="fontColor">立即阅读 > </span>
							</div>
						</div>	
					</div>	
				</div>
			</div>
			<div class="col-4">
				<div class="home-readAndcons clearfix mb-2">
					<h5 class="fontColor float-left">阅读排行</h5>
				</div>
				<div class="borderddd">
					<div class="tuijian-right" v-for="chineseBooksFive in chineseBooksFives">
						<div class="tuijianSide-chinese">
							<div class="sideHorver-chinese clearfix">
								<i>0{{chineseBooksFive.booksId}}</i>
								<img class="mx-3" v-bind:src="chineseBooksFive.booksUrl" alt="">
								<span class="px-2">{{chineseBooksFive.booksTitle}}</span>
							</div>
							<div class="borderline"></div>
						</div>
					</div>
					<div class="tuijianMore">
						<div class="pb-1">
							<i class="fa fa-arrow-right"></i>
							<span>查看更多</span>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div> 
</template>
<script>

export default {
	name:'home',
	data(){
		return{
			readAndcons:[],
			onlineBooks:[],
			tuijians:[],
			tuijianRights:[],
			chineseBooks:[],
			chineseBooksFives:[]
		}
	},
	created(){
		// 获取读书资讯数据
		this.$http.get('http://localhost:3000/consultation').then((res) => {
       		this.readAndcons = res.body.slice(0,4);
       	})

       	// 获取在线读书数据
       	this.$http.get('http://localhost:3000/books').then((res) => {
       		this.onlineBooks = res.body.slice(0,14);
       		this.tuijians = res.body.slice(0,10);
       		this.tuijianRights = res.body.slice(0,8);
       	})

       	// 获取国学/古籍数据
       	this.$http.get('http://localhost:3000/books').then((res) => {
       		var val = [];
       		for (var i = 0; i < res.body.length; i++) {
       			if(res.body[i].category == 'chinesebooks'){
       				val.push(res.body[i]);
       			}
       		}
       		this.chineseBooks = val.slice(0,4);
       		this.chineseBooksFives = val.slice(0,5);
       	})

       	$(function($){
			// 选项卡
			$('.tabNav').click(function(){
				$(this).css({"border-bottom":"2px solid rgb(81,156,154)","transition":"all 0.4s;"}).siblings().css({"border-bottom":"1px solid #ccc"});
				var x = "#" + $(this).attr("xxx");
				$(x).removeClass("hide").siblings().addClass("hide");
			});
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
			// hover -- 古籍 实现
			$(".sideHorver-chinese img")[0].style.display = "block";
			$(".sideHorver-chinese i")[0].style.color = "rgb(186,97,90)";
			$(".sideHorver-chinese i")[0].style.fontSize = "16px";
			$(".sideHorver-chinese span")[0].style.fontSize = "16px";
			$(".sideHorver-chinese").each(function(i){
				$(this).mouseover(function(){
					$(".sideHorver-chinese i").css({"color":""});
					$(".sideHorver-chinese i").css({"font-size":""});
					$(".sideHorver-chinese img").css({"display":"none"});
					$(".sideHorver-chinese span").css({"font-size":""});
					$(".sideHorver-chinese i")[i].style.color = "rgb(186,97,90)";
					$(".sideHorver-chinese i")[i].style.fontSize = "16px";
					$(".sideHorver-chinese img")[i].style.display = "block";
					$(".sideHorver-chinese span")[i].style.fontSize = "16px";
				});
			});
		});
	},
}



</script>

<style>

</style>

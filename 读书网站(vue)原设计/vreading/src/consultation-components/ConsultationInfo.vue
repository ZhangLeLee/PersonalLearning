<!-- 咨询 - 展示说明 -->
<template>
	<div id="consulationInfo">
		<p>当前位置：首页&nbsp;&nbsp;>>&nbsp;&nbsp;资讯&nbsp;&nbsp;>>&nbsp;&nbsp;{{conCategory}}</p> 
		<div class="card card-body w-80 mc my-4">
			<h4 class="fontColor mb-4">{{info.newsTitle}}</h4>
			<p class="info-p mb-5">{{info.conAuthor}}&nbsp;&nbsp;&nbsp;&nbsp;{{info.newsTime}}&nbsp;&nbsp;&nbsp;&nbsp;来源：{{info.newsSource}}</p>
			<div class="bgH4 py-4 px-3 w-75 mc fontColor mb-5 textIndent" style="border:1px solid #ccc;border-left:6px solid #ccc;">
				{{info.newsCon}}
			</div>
			<p class="mb-5 textIndent">飞机时代放大镜三方；接娃放大镜撒范德萨放大镜撒佛腐恶瘦肉；的 工具对佛手瓜积分第三果然爱哦啊父集的撒开发阶段搜爱疯分大神积分第三大法师 父集的死啊放假瑞文啊；非范德萨范德萨发分大神范德萨范德萨发范德萨发。</p>
			<img class="mc mb-5" v-bind:src="info.newsUrlBig" alt="" width="600px;">
			<p class="mb-4 textIndent">看风景的刷卡费及低俗房间打扫费接娃绯闻范德萨范德萨范德萨范德萨发范德萨范德萨范德萨范德萨发即热呕吐和惹你给他官方第三个IE日天hi而股份的既视感为技术的通过放大镜说课稿 工具对覅四个；加热官方第三个人是官方第三个人人体发文件埃尔文； 爱的方式间隔符的；十几个人啊发的送；狗肉节。</p>
			<p class="mb-4 textIndent">GV打飞机快乐时光覅达拉斯返回的萨克分类和我范德萨， 幅度时安抚和萨回复阿萨德撒节点‘ 范德萨范德萨’杀伐决断；萨芬范德萨范德萨就佛挡杀佛的胜利法规热UI发来贺电算的话费U为为阿拉丁发货撒返回的是离过婚的发生覅的函数 发挥大蒜粒发货的撒返回的赛飞哇复合物酸丰富是惹人范德萨万恶入围；发的沙粒读书方便V领次U盾是否合法ID旅发委啊范德萨发顺外路服务而非局答复是客户分类日风刀霜剑啊；非叫我。</p>
			<p class="mb-4 textIndent">及时答复决赛费我父集的萨芬就，地方萨克覅额外大房间诶哦瓦房；的萨芬较丰富范德萨见覅额哇积分第三咖啡金额我啊范德萨减肥药附近的萨芬飞机打死阿佛我骄傲福克斯认为日晚惹急我跳热舞区有人范德萨话费挖认为发热是个人。非让我安全， 父集萨迪哇哦夫人。</p>
		</div>
		
	    
	</div> 
</template>

<script>

  export default {
    name:'consulationInfo',
    data(){
    	return {
    		id:this.$route.params.conId,
    		info:{},
    		conCategory:String
    	}
    },
    created(){
    	console.log(this.id);
    	// 获取该条数据
    	this.$http.get('http://localhost:3000/consultation?conId='+this.id).then((res) => {
   			this.info = res.body[0];
   			// console.log(res.body);
   			if(res.body[0].conCategory == "news"){
   				this.conCategory = "新闻";
   			} else if (res.body[0].conCategory == "booknews"){
   				this.conCategory = "书讯";
   			} else if (res.body[0].conCategory == "bookreview"){
   				this.conCategory = "书评";
   			} else if (res.body[0].conCategory == "history"){
          this.conCategory = "历史";
        } else if (res.body[0].conCategory == "culture"){
          this.conCategory = "文化";
        } else if (res.body[0].conCategory == "art"){
          this.conCategory = "艺术";
        } else if (res.body[0].conCategory == "digest"){
          this.conCategory = "人物";
        } else {
          return;
        }
   			// console.log(res.body[0]);
   			// console.log(this.id);
       	})
    }
  }
</script>

<style>
  
</style>

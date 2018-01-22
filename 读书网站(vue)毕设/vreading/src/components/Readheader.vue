<!-- 网页导航 -->
<template>
  <div id="read-header">
    <div class="zbglightgray znav">
    	<div class="bodyWidth clearfix">
    		<div class="text-secondary znav-title float-left">读书好，读好书，好读书！</div>
    		<div class="text-secondary znav-title float-right rg">
    			<a class="text-secondary" href="">注册</a> |
    			<a class="text-secondary" href="">登录</a>
    		</div>
    	</div>
    </div>
    <div class="logo bodyWidth">
    	<div class="row">
    		<div class="col-4 col-sm-4">
    			<img src="../assets/logoimages/logo.png" alt="读书网">
    		</div>
    		<div class="col-5 col-sm-5">
	    		<div class="input-group my-4">
		            <input class="form-control" type="text" placeholder="搜索海量图书">
		            <span class="input-group-btn">
		                <button class="btn bgbody text-white fonti" type="button">&nbsp;<i class="fa fa-search"></i>&nbsp;</button>
		            </span>
	    		</div>
    		</div>
    		<div class="col-3 col-sm-3">
    			<div class="btn btn-group zbtnhover">
		            <button class="btn btn-light textbody borderddd px-4 fontbody" type="button"><i class="fa fa-user"></i> 我的账户</button>
		            <button class="btn btn-light textbody borderddd px-4 fontbody" type="button"><i class="fa fa-book"></i> 我的书架</button>
		        </div>
    		</div>  		
    	</div>
		<div class="d-flex justify-content-around">
			<router-link class="divRouter py-2 divRouterActive" to="/">首页</router-link>
			<router-link class="divRouter py-2" to="/consultation">资讯</router-link>
			<router-link class="divRouter py-2" to="/ancientbooks">国学/古籍</router-link>
			<router-link class="divRouter py-2" to="/publishingbooks">出版图书</router-link>
			<router-link class="divRouter py-2" to="/ebooks">电子书</router-link>
			<router-link class="divRouter py-2" to="/networknovel">网络小说</router-link>
			<router-link class="divRouter py-2" to="/onlineread">在线读书</router-link>
			<router-link class="divRouter py-2" to="/readnav">读书导航</router-link>
		</div>
    </div>
  </div> 
</template>

<script>
    
    export default {
        name:'read-header',
        created(){
            $(function($){
                $(".divRouter").click(function(){
                    $(this).css({"border-bottom":"2px solid rgb(186,97,90)","color":"rgb(186,97,90)"}).siblings().css({"border-bottom":"2px solid rgb(73,63,63)","color":"rgb(73,63,63)"});
                });

            })
        }
    }
</script>

<style scope>
  
</style>

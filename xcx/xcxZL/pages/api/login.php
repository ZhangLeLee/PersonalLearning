<?php 
// 登录api传过来的code
$code = $GET['code'];
$appid = 'wx7c2f8d1d01c1070e';
$appsecret = '';
$url = "https://api.weixin.qq.com/sns/jscode2session?appid={$appid}&secret={$appsecret}&js_code={$code}&grant_type=authorization_code";
function httpGet($url){
	$curl = curl_init();
	curl_setopt()
}
function httpGet ($url) {
	$curl = curl_init();
	curl_setopt($curl,CURLOPT_URL,$url);
	curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
	$res = curl_exec($curl);
	curl_close($curl);
	return $res;
}

 ?>





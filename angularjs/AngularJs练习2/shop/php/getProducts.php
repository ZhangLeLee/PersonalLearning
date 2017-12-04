<?php 
	// 链接数据库（服务器，登录服务器的用户名，密码，链接的数据库名称）
	$mysqli = new mysqli("localhost","root","","shop");
	if($mysqli->connect_errno){
		die($mysqli->connect_error)."数据库链接失败";
	}
	// 处理乱码
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM product";
	$result = $mysqli->query($sql);
	if($result->num_rows){
		$data = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data);
	}
	$mysqli->close();


 ?>
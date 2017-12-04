<?php 
	// 数据库查询
	$mysql = new mysqli("localhost","root","","shop");
	if($mysql->connect_errno){
		die("数据库链接失败".$mysql_connect_error);
	}
	$mysql->query("set names utf8");
	$sql = "SELECT * FROM product";
	$result = $mysql->query($sql);
	if($result->num_rows){
		$data = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($data);
	}
	$mysql->close();
 ?>







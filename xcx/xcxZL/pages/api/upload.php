<?php 
	$files = $_FILES['photo'];
	$name = time().".jpg";  // 上传后存取的文件名字
	$formData = $files["tmp_name"]; //上传过来的临时路径
	$saeSto = new SaeStorage();  // 初始化
	$img = new SaeImage();

	// 获取本地上传图片的数据
	$imgData = file_get_contents($formData);
	$img->setData($imgData);
	// 提高图片质量
	$img->improve();
	// 执行处理并返回处理后的二进制数据
	$newData = $img->exec();
	// 将修改为storage名称
	$saeSto->write("test",$name,$newData);
	// 获取路径
	$url = $saeSto->getUrl('test',$name);
	echo $url;

 ?>





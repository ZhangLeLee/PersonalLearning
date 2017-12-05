// 创建标签
function createFn(name,father,cStyle){
	var w = $("<"+name+">").appendTo(father);
	w.addClass(cStyle);
	return w;
}
// 放大镜封装函数
	function fadajing(small,meng,big){
		// 1.鼠标移入小图, 蒙版和大图出现
		small.mouseover(function(){
			meng.show();
			big.show();
			// 3.鼠标移动
			$(this).mousemove(function(ev){
				// 鼠标放在蒙版的中间
				var x = ev.clientX - meng.width()/2 - $(this).offset().left; 
				var y = ev.clientY - meng.height()/2 - $(this).offset().top;
				// 蒙版的移动范围
				if(x < 0){
					x = 0;
				}
				if(x > $(this).width() - meng.width()){
					x = $(this).width() - meng.width();
				}
				if(y < 0){
					y = 0;
				}
				if(y > $(this).height() - meng.height()){
					y = $(this).height() - meng.height();
				}
				meng.css({left:x,top:y});
				// 修改大图
				var scale = big.width() / meng.width();
				// 大图中显示的区域
				var bigX = x * scale;
				var bigY = y * scale;
				big.css({
					backgroundPosition:-bigX + "px " + - bigY + "px"
				});
			});
		});
		// 2.鼠标移出小图,蒙版和大图消失
		small.mouseout(function(){
			meng.hide();
			big.hide();
		});
	}
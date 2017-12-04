new Vue({
	el:"#vue-app",
	data:{   // 存储数据
		age:18,
		x:0,
		y:0
	},
	methods:{
		addAge:function(count){
			this.age += count;
		},
		subtractAge:function(count){
			this.age -= count;
		},
		moveXY:function(){
			// console.log("鼠标正在移动...");
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		// stopPropagation:function(event){
		// 	event.stopPropagation();
		// },
		stopPropagation:function(event){
			
		},
		alert:function(){
			alert("Hello world!");
		},
		logName:function(){
			console.log("this is name...")
		},
		logAge:function(){
			console.log("age...")
		}
	}
});

/*
	事件: 用于按钮触发时处理逻辑的方法
	v-on: 给某个事件<click>绑定到某个事件上
	@: 语法糖,相当于v-on
	事件值: 可以是对应的方法,也可以是具体的值
	优先级: 首先找方法,如果没有方法,那么找属性
	事件修饰符: 
		stop - 阻止冒泡事件
		once - 事件值发生一次
		prevent - 阻止默认事件
		
		input
		enter - 按回车键
*/





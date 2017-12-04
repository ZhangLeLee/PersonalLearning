new Vue({
	el:"#vue-app",
	data:{
		// key:value -- 可以随便写
		name:"Henry",
		job:"web开发",
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com' target='_black'>websiteTag</a>",
	},
	methods:{
		greet:function(time){
			return "Good " + time + " " + this.name + " !"
		}
	}
});

/*
	el: element - 需要控制的标签元素
	data: 用于存储各种类型的数据<array,object,string,number>
	methods: 用于存储各种类型的方法
	v-bind: 用于绑定某个属性<指令>
	v-html: 用于给某个标签绑定值为标签的属性
	" : ": 是v-bind的语法糖，和v-bind的效果相同
*/





new Vue({
	el:"#vue-app",
	data:{   // 存储数据
		colors:["hotpink","red","lightgreen"],
		users:[
			{name:"Henry",age:30},
			{name:"Bucky",age:40},
			{name:"Slyse",age:50},
			{name:"Emily",age:60}
		]
	},
	methods:{
		
	},
	computed:{  
		
	}
});

/*
	v-for: 用于遍历数组和对象

	in: 是变量和属性的分割线
	变量: 随便起名字, 起啥名, 用的时候就写啥
	属性: 一定来自于data对象
	数组: 遍历数组时, 默认传的值为数组元素, 第二个值为下标
	对象: 遍历对象时, 第一个值是val, 第二个值是key
*/





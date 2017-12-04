new Vue({
	el:"#vue-app",
	data:{   // 存储数据
		a:0,
		b:0,
		age:20
	},
	methods:{
		// addToA:function(){    //点击任意一个, 所有方法都会被调用, 浪费性能
		// 	console.log("addToA");
		// 	return this.age + this.a;
		// },
		// addToB:function(){
		// 	console.log("addToB");
		// 	return this.age + this.b;
		// }
	},
	computed:{  // computed 在搜索时使用
		addToA:function(){   // 点击addToA, addToB方法不会被调用
			console.log("addToA");
			return this.age + this.a;
		},
		addToB:function(){
			console.log("addToB");
			return this.age + this.b;
		}
	}
});

/*
	Computed - 计算属性
	computed: 计算属性和方法methods使用方式极度相似,
		使用场景: 处理频繁调用方法的时候<搜索>, 建议使用计算属性,
		使用规则: 计算属性, 在调用时, 不能加 "()" 号;
*/





new Vue({
	el:"#vue-app",
	data:{   // 存储数据
		age:18,
		name:"",
	},
	methods:{
		logName:function(){
			// console.log(this.$refs.name.value);
			this.name = this.$refs.name.value;
		},
		logAge:function(){
			this.age = this.$refs.age.value;
		}
	}
});

/*
	双向数据绑定
	v-model: 应用于input / textarea / select
	ref: 用于设置元素唯一标识,通过$refs获取属性值
*/





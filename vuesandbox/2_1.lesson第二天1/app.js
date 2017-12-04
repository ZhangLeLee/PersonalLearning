var one = new Vue({
	el:"#vue-app-one",
	data:{   // 存储数据
		title:"this is vue-app-one"
	},
	methods:{
		
	},
	computed:{  
		greet: function(){
			return "Hello App one!"
		}
	}
});
var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"this is vue-app-two"
	},
	methods:{
		changeTwo: function(){
			this.title = "aaa";
			one.title = "anything...";
		}
	},
	computed:{
		greet: function(){
			return "Hello App two!"
		}
	}
})

/*
	
*/





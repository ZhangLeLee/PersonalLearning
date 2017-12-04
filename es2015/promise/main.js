// "use strict";  // 严格模式

function worthless(){
	console.log(this);   // 严格模式下,函数内this不知道指向时, undefined
}
// worthless();


// 实例化promise对象
let myPromise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("成功时, 会显示这句话!");
	},1000);

	setTimeout(() => {
		reject("error: 网络连接失败!");
	},2500);
});
// console.log(myPromise);

// myPromise.then((data) => {
// 	console.log(data);
// },(err) => {
// 	console.log(err);
// });

// 常见的是以下这种形式
// myPromise.then((data) => {
// 	console.log(data);
// }).catch((err) => {
// 	console.log(err);
// });

let myPromise2 = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("队列中的第二个成功时调用的数据!");
	},1500);
});
Promise.all([myPromise,myPromise2])
	   .then((data) => {
	   		console.log(data);
	   })
	   .catch((err) => {
	   		console.log(err);
	   })

/*
	Promise:
		then(): 第一个回调函数在成功时触发, 第二个回调函数在失败时触发
		catch(): 主要捕捉异常错误信息
*/

fetch("http://localhost:3000/users")
	.then((res) => {   // 参数是可以随便起的
		res.json().then((data) => {
			console.log(data);
		})
	})
	.catch((err) => {
		console.log("error: 请求失败!");
	})
	








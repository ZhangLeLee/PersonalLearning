/* 学习分布操作符 结构 argument参数 */

/* call / apply / bind */

// var obj = {num : 2};
// var addToThis = function(a){
// 	return this.num + a;
// }
// console.log(addToThis.call(obj,3));
/* 
	call 方法的作用: 
		1. 为方法增加对象参数
		2. 改变函数内this的指向
*/

// var obj = {num : 2};
// var addToThis = function(a,b,c){
// 	return this.num + a[0] + a[1] + a[2];
// }
// var arr = [1,2,3];
// console.log(addToThis.call(obj,arr));

// apply
// var obj = {num : 2};
// var addToThis = function(a,b,c){
// 	return this.num + a + b + c;
// }
// var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));

// bind
// var obj = {num : 2};
// var addToThis = function(a,b,c){
// 	return this.num + a + b + c;
// }
// let method = addToThis.bind(obj);
// console.log(method)  // f(a,b,c){return this.num +a+b+c;}
// console.log(method(1,2,3));




// let sum = function(){
// 	console.log(arguments);  //arguments 打印出来的是对象
// }


// ES5  错误
// let sum = function(){
// 	return arguments.reduce(function(prev,curr){
// 		return prev + curr;
// 	});
// }
// sum(2,3,4,5);

// ES5  正解
// let sum = function(){
// 	return Array.prototype.reduce.call(arguments,function(prev,curr){
// 		return prev + curr;
// 	});
// }
// console.log(sum(2,3,4,5));

// ES6
// let sum = function(...args){
// 	console.log(args);
// }
// sum(2,3,4,5);

// let sum = function(...args){    // 使用分布操作符
// 	return args.reduce((prev,curr) => {
// 		return prev + curr;
// 	});
// }
// console.log(sum(2,3,4,5));

// let numbers = [3,4,5];
// let array = [1,2,...numbers,6,7];
// console.log(array);


// ES5 求最大值
// let max = Math.max(4,3,7,9);
// console.log(max);

// ES5 求最大值, 传数组
// let numbers = [4,3,7,9];
// let max = Math.max(numbers);  // 无法实现
// let max = Math.max.apply(null,numbers);
// console.log(max);

// ES6 求最大值, 传数组
let numbers = [2,3,5,9];
let max = Math.max(...numbers);
console.log(max);
















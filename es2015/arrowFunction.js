/* jsbin.com */
// 箭头函数

// add = () -> 
//   a + b
// console.log(add(2,3));

// let add = (a,b) => {
//   return a + b;
// }
// console.log(add(2,3));

// 练习: 将数组中的值进行翻倍
// let numbers = [2,3,4,5];
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] *= 2;
// }
// console.log(numbers);
// es5
// let doubles = numbers.map(function(n){
//   return n * 2;
// });
// console.log(doubles);  // [4, 6, 8, 10]
// let doubles = numbers.map(n => {  //当括号里面只有一个参数时, 可将括号省略
//   return n * 2;
// });
// console.log(doubles);  // [4, 6, 8, 10]



// let person = {
//   name:"tt",
//   sayName: function(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// 这样不行
// let person = {
//   name:"tt",
//   sayName: () => {
//     console.log(`Hello ${this.name}`);  // 打印不出name的值
//   }
// }
// 这样可以 实现打招呼
// let person = {
//   name:"tt",
//   sayName(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// person.sayName();

// 实现es5数组遍历  this指向window
// let person = {
//   name:"tt",
//   hobbies:["打篮球","写代码","爬山"],
//   showHobbies:function(){
//   	let self = this;
//   	this.hobbies.forEach(function(hobby){
//   		// console.log(this);  //找不到该指向谁时, 指向window
//   		console.log(`${self.name}的爱好是${hobby}`);
//   	});
//   }
// }

// 实现es6数组遍历  this指向上一级
let person = {
  name:"tt",
  hobbies:["打篮球","写代码","爬山"],
  showHobbies(){
  	// console.log(this);   // this: 指的person这个对象
  	this.hobbies.forEach((hobby) => {
  		console.log(this);  //找不到该指向谁时, 指向距离它最近的对象
  		// console.log(`${this.name}的爱好是${hobby}`);
  	});
  }
}
person.showHobbies();







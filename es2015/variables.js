let name = "tt";
console.log(name);

// let 和 var 的不同

// let 和 var 区别: let作用域的概念

// var 函数
// function sayName(){
//    var name = "tt";
// }
// sayName();
// console.log(name);  //undefined  
// 在js中var的变量作用域仅限于函数中

// let 函数 if for 
// function sayName(){
//   let name = "tt";
// }
// sayName();
// console.log(name);

// if(true){
//   let name = "tt";  //此处let改为var时, 可以打印出name值
// }
// console.log(name);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log("循环外", i);

// {
//   let name = "tt";
// }
// console.log(name);

/*  
	let 的作用域仅限于自身的作用域内
	let 在任何{}括号内都有作用域
*/



// 常量是在程序运行过程中不可以被改变的量
// const APT_KEY = "dahsf8ewpdf";
// API_KEY = "yyyyyyy";
// console.log(API_KEY);  //会报错

// templete  模板语法
var firstname = "t";
var lastname = "t";
// console.log("我的全名是" + firstname + lastname);
console.log(`我的全名是 ${firstname} ${lastname}`);




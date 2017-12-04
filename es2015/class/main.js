
// // ES5 类
// function Plane(){
// 	this.wings = 2;
// 	this.speed = 100;
// 	this.altitude = 0;
// }
// // 创建一个类
// const myPlane = new Plane();

// // 为这个类扩展方法
// Plane.prototype.fly = function(){
// 	this.altitude = 3000;
// }
// // myPlane.fly();
// // console.log(myPlane.altitude);

// // 创建另外一个类
// function FighterPlane(){
// 	this.speed = 1000;
// }
// FighterPlane.prototype = new Plane();  //子类指针指向父类对象

// var fighterPlane = new FighterPlane();
// // fighterPlane.fly();
// console.log(fighterPlane.altitude);
// console.log(fighterPlane);


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// ES6
class Person{
	constructor(name,age,weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
	displayWeight(){
		console.log(this.weight);
	}
}
let person1 = new Person("蹄蹄",18,90);
// person1.displayWeight();
// console.log(person1.name);     // 先打印体重, 在打印名称


class Programmer extends Person{
	constructor(name,age,weight,language){
		super(name,age,weight);
		this.language = language;
	}

	displayWeight(){
		console.log(this.weight + " kg");
	}
}
let ff = new Programmer("ff",18,"100","go");
ff.displayWeight();
console.log(ff.language);








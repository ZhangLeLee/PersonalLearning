var app = angular.module("main",["myFilter", "ngRoute"]);
app.directive("navBar",function(){
	return {
		templateUrl:"../html/navBar.html"
	}
}); 
// 通过路由切换界面
app.config(function($routeProvider){
	$routeProvider.when("/products",{
		templateUrl:"../html/products.html"
	});
	$routeProvider.when("/buylist",{
		templateUrl:"../html/buyList.html"
	});
	$routeProvider.otherwise({
		templateUrl:"../html/products.html"
	});
})
// app.directive("product",function(){
// 	return {
// 		templateUrl:"../html/products.html"
// 	}
// })
app.controller("mainController",function($scope){
	$scope.buyObjs = {
		num:0,
		arr:[],   // 购买哪些物品
	};
	$scope.getAllPrice = function(){
		var price = 0;
		for (var i = 0; i < $scope.buyObjs.arr.length; i++) {
			var myObj = $scope.buyObjs.arr[i];
			price += Number(myObj.obj.price) * myObj.num;
		}
		$scope.allPrice = price;
	}
	$scope.deleteObj = function(obj){
		for (var i = 0; i < $scope.buyObjs.arr.length; i++) {
			var myObj = $scope.buyObjs.arr[i];
			if(myObj.obj.p_id == obj.p_id){
				$scope.buyObjs.num = $scope.buyObjs.num - myObj.num;
				$scope.buyObjs.arr.splice(i,1);
				break;
			}
		}
		$scope.getAllPrice();
	}
})


// 过滤器
var customFilter = angular.module("filters",[]);
customFilter.filter("unique",function(){
	return function(data,property){
		if(angular.isArray(data)){
			var categoryNames = [];
			var obj = {};
			for (var i = 0; i < data.length; i++) {
				var category = data[i][property];
				if(angular.isUndefined(obj[category])){
					categoryNames.push(category);
					obj[category] = true;
				}
			}
			return categoryNames;
		} else {
			return [];
		}
	}
});


var app = angular.module("shop",["filters","ngRoute"]);
app.directive("navBar",function(){  //定义指令
	return {
		templateUrl:"template/navbar.html"
	}
});

app.config(function($routeProvider){
	$routeProvider.when("/products",{
		templateUrl:"template/products.html"
	});
	$routeProvider.when("/checkout",{
		templateUrl:"template/checkout.html"
	});
	$routeProvider.otherwise("/products",{
		templateUrl:"template/products.html"
	});
})

app.controller("mainCtrl",function($scope,$rootScope){
	// 加入购物车
	$scope.carts = [];
	$scope.addToCart = function(p){
		var hasThisProductad = false;  //假定购物车没有要加入的商品
		for (var i = 0; i < $scope.carts.length; i++) {
			if($scope.carts[i].product.name == p.name){
				hasThisProductad = true; // 经检查，购物车没有这个商品
				// 应该让商品的数量++
				$scope.carts[i].count++;
				break;
			} 
		} 
		if(hasThisProductad == false){
			$scope.carts.push({
				product:p,
				count:1,
			})
		}
		// console.log($scope.carts);
	}

	$scope.totalCount = function(){
		var total = 0;
		var totalPrice = 0;
		for (var i = 0; i < $scope.carts.length; i++) {
			total += $scope.carts[i].count;
			totalPrice += $scope.carts[i].count * $scope.carts[i].product.price;
		}
		$scope.totalPrice = totalPrice;
		return total;
	}
})

// 所有的controller都可以使用全局的$rootScope
// 子集的controller可以继承父集的controller里面的属性



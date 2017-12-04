// 服务（service）
// $http: 可以做网络请求
// $scope: 区域 - 每一个controller都自带一个$scope属性

app.controller("productsCtrl",function($http,$scope){  // 定义控制器
	$http({
		method:"get",
		url:"php/getProducts.php"
	}).then(function(res){
		$scope.products = res.data;

		// 处理分页
		$scope.getPages = function(){
			var count = $scope.categoryProducts.length/3;
			var pages = [];
			for (var i = 0; i < count; i++) {
				pages.push(i+1);
			}
			$scope.pages = pages;
		}

		// 处理分页数据
		$scope.getProductsPerpage = function(page){
			$scope.currentPage = page;
			var perPageProducts = [];
			for (var i = (page-1)*3; i < Math.min($scope.categoryProducts.length,page*3); i++) {
				perPageProducts.push($scope.categoryProducts[i]);
			}
			$scope.perPageProducts = perPageProducts;
		}

		// 分类(category)匹配
		$scope.getProductsOfCategory = function(category){
			
			// 记录选中的分类
			$scope.choosedCategory = category;

			var categoryProducts = [];
			if(category == "全部"){
				categoryProducts = $scope.products;
			} else {
				for (var i = 0; i < $scope.products.length; i++) {
					if($scope.products[i].category == category){
						categoryProducts.push($scope.products[i]);
					}
				}
			}
			$scope.categoryProducts = categoryProducts;
			$scope.getPages();
			$scope.getProductsPerpage(1);

		}
		$scope.getProductsOfCategory("全部");

		// 点击按钮颜色改变
		$scope.getClass = function(category){
			return $scope.choosedCategory == category?"btn-primary":"";
		}

		// 点击改变分页按钮的颜色
		$scope.getClassOfPage = function(page){
			return $scope.currentPage == page?"btn-primary":"";
		}


	},function(error){	
		console.log(error);
	})
});
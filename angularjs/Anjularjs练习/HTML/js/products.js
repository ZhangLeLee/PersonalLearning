app.controller("productController",function($scope,$http){
	//  进行网络请求，获得数据
	$http({
		method:"get",
		url:"../../PHP/getDB.php"
	}).then(function(res){
		// 点击购物车购买
		/*
			{
				num:总数量
				arr:[{
					num:单个数量
					obj:
				}]
			}
		*/
		// 加入购物车
		$scope.buy = function(obj){
			// $scope.buyObjs.arr.push(obj);
			// console.log(obj);
			var isInArr = false;
			for (var i = 0; i < $scope.buyObjs.arr.length; i++) {
				var myobj = $scope.buyObjs.arr[i];
				console.log(myobj.obj.p_id);
				console.log(obj.p_id);
				if(myobj.obj.p_id == obj.p_id){
					myobj.num++;
					isInArr = true;
				}
			}
			if(isInArr == false){
				$scope.buyObjs.arr.push({
					num:1,
					obj:obj
				})
			}
			$scope.buyObjs.num++;
			$scope.getAllPrice();
		}


		// 分页效果
		$scope.getPerPageArr = function(page){
			var arr = [];
			/*
				page=1: 0,1,2
				page=2: 3,4
			*/
			for (var i = (page - 1) * 3; i < page*3 && i < $scope.categoryArr.length; i++) {
				var obj = $scope.categoryArr[i];
				arr.push(obj);
			}
			// 
			$scope.perPageArr = arr;
			$scope.nowPage = page;
		}

		// 通过类别删选出对应类别的数组
		$scope.categoryClick = function(category){
			$scope.categoryArr = [];
			for (var i = 0; i < $scope.allProducts.length; i++) {
				var obj = $scope.allProducts[i];
				if(obj.category == category){
					$scope.categoryArr.push(obj);
				}
			}
			$scope.nowCategory = category;
			$scope.getPerPageArr(1);
			$scope.getPageNum();
		}

		// 获得数组换算的页数
		$scope.getPageNum = function(){
			var num = $scope.categoryArr.length/3;
			var pages = [];
			for (var i = 0; i < num; i++) {
				pages.push(i+1);
			}
			$scope.pageNum = pages;
		}

		// 点击按钮效果
		$scope.pageStateClass = function(page){
			return $scope.nowPage == page?'btn-primary':'';
		}
		$scope.categoryStateClass = function(category){
			return $scope.nowCategory == category?'btn-primary':'';
		}

		// 获得所有商品
		$scope.getAllProducts = function(){
			$scope.categoryArr = $scope.allProducts;
			$scope.nowCategory = "全部显示";
			$scope.getPerPageArr(1);
			$scope.getPageNum();
		}


		// 数据获得
		$scope.allProducts = res.data;
		$scope.categoryArr = $scope.allProducts;
		$scope.nowCategory = "全部显示";
		$scope.getPerPageArr(1);
		$scope.getPageNum();
		

	},function(error){
		console.log(error);
	})
})
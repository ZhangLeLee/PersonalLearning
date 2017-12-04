var cf = angular.module("myFilter",[]);
cf.filter("categoryFilter",function(){
	return function(data,property){
		if(angular.isArray(data)){
			var arr = [];
			var obj = {};
			for (var i = 0; i < data.length; i++) {
				var myobj = data[i];
				var value = myobj[property];
				if (angular.isUndefined(obj[value])) {
					arr.push(value);
					obj[value] = true;
				}
			}
			return arr;
		}
		
	}
})
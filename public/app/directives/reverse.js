angular.module('reverse', [])   // general convention - name same as file name

.filter('reverse',function(){

	return function(items){
		return items.slice().reverse();
	}

}); 
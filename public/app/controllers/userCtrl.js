angular.module('userCtrl', ['userService'])


.controller('UserController', function(User){

	var vm = this;

	// vm.processing = true;  -- no need to use

	User.all()
		.success(function(data){  //promise object
				// vm.processing = false;  -- no need to use
				vm.users = data;

		})


})



.controller('UserCreateController', function(User, $location, $window){


	var vm = this;

	vm.signupUser = function(){

		vm.message = '';

		User.create(vm.userData)
			.then(function(response){   // promise object
				vm.userData = {};		// clear form after sign up
				vm.message = response.data.message;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/');

			})


	}


});
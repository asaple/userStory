angular.module('MyApp', ['appRoutes','mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverse'])   

.config(function($httpProvider){

	$httpProvider.interceptors.push('AuthInterceptor');

})


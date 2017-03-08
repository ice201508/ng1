(function(){
	'use strict';

	angular.module('app.login')
			.directive('myLogin', myLogin);

	function myLogin(){
		return {
			replace: true,
			templateUrl: 'script/login/app.login.html',
			controller: 'loginController',
			controllerAs: 'login',
			link: link,
		}
	}

	function link(scope, ele, attr){
		
	}
})();

(function(){
	'use strict';

	angular.module('app')
			.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider){
		$stateProvider.state('app', {
			url: '/login',
			templateUrl: '../login/app.login.html',
			controller: 'loginController',
			controllerAs: 'login',
		})

		$urlRouterProvider.otherwise('login');
	}
})();
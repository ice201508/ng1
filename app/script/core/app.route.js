(function(){
	'use strict';

	angular.module('app')
			.config(config);

	config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

	function config($locationProvider, $stateProvider, $urlRouterProvider){
		$stateProvider.state('login', {
			url: '/login',
			templateUrl: '/script/login/app.login.html',
			controller: 'loginController',
			controllerAs: 'login',
		}).state('main', {
			url: '/dashboard',
			templateUrl: '/script/dashboard/app.dashboard.html',
			controller: 'dashboardController',
			controllerAs: 'dashboard',
		})

		$urlRouterProvider.otherwise('login');
		$locationProvider.hashPrefix('');
		$locationProvider.html5Mode(false);
	}
})();
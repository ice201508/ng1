(function(){
	'use strict';

	angular.module('app.nav')
			.directive('myNav', myNav);

	myNav.$inject = ['$timeout'];

	function myNav($timeout){
		return {
			replace: true,
			templateUrl: '/script/nav/app.nav.html',
			controller: 'navController',
			controllerAs: 'vmNav',
			link: link,
		};

		function link(scope, ele, attr) {

		}
	}
})();

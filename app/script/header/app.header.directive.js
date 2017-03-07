(function(){
	'use strict';

	angular.module('app.header')
			.directive('myHeader', myHeader);

	myHeader.$inject = ['$rootScope'];
	
	function myHeader($rootScope){
		return {
			replace: 'true',
			templateUrl: 'script/header/app.header.html',
			controller: 'headerController',
			controllerAs: 'head',
			link: link,
		}

		function link(scope, ele, attr) {
			$rootScope.status = "指令内部的全局变量";
		}
	}
})();
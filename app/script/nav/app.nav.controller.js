(function(){
	'use strict';

	angular.module('app.nav')
		.controller('navController', navController);

	function navController(){
		var vm = this;
		this.name = "message";
	}
})();

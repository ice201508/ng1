(function(){
	'use strict';

	angular.module('app.login')
			.controller('loginController', loginController);

	loginController.$inject = ['$rootScope'];

	function loginController($rootScope){
		var vm = this;
		vm.title = "login";
	}

})();

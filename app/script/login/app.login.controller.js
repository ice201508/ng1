(function(){
	'use strict';

	angular.module('app.login')
			.controller('loginController', loginController);

	loginController.$inject = ['$rootScope'];

	function loginController($rootScope){
		var vm = this;
		vm.title = "login";
		vm.go_dashboard = go_dashboard;
		
		function go_dashboard(){
			var vm = this;

			console.log(11);
		}
	}

})();

(function(){
	'use strict';

	angular.module('app.dashboard')
			.controller('dashboardController', dashboardController);

	dashboardController.$inject = ['$rootScope'];

	function dashboardController($rootScope){
		var vm = this;
            vm.message= "3333333333333";
            vm.labels = ["卖出的数量", "各种书籍分类", "各类书籍销量"];
            vm.data = [300, 500, 100];
            console.log(123);
	}
})();

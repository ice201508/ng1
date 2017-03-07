(function(){
	'use strict';

	angular.module('app.header')
			.controller('headerController', headerController);

	//这句去掉貌似也可以
	headerController.$inject = ['$filter', '$timeout'];

	function headerController($filter, $timeout){
		var vm = this;
		this.name = "message";
		this.get_name = get_name;

		function get_name(){
			console.log(this.name);
		}

		$timeout(function(){
			console.log('注入')
		}, 2000);
	}
})();
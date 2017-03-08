(function(){
	'use strict';

	angular.module('app.header')
			.controller('headerController', headerController);

	//这种注入方式便于单元测试以及阅读
	headerController.$inject = ['$filter', '$timeout'];

	function headerController($filter, $timeout){
		var vm = this;
		vm.name = "message";
		vm.get_name = get_name;
		vm.alerts = [
			{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
			{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
		];

		function get_name(){
			console.log(vm.name);
		}

		$timeout(function(){
			console.log('注入')
		}, 2000);
	}
})();

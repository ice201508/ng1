(function(){

	angular.module('app')
		.config(config)
		.run(run);

	run.$inject = ['$rootScope'];

	function config(){

	}

	function run($rootScope){
		$rootScope.isLogin = false;
	}
})();

(function(){

	angular.module('app')
		.config(config)
		.run(run);

	config.$inject = ['$httpProvider'];
	run.$inject = ['$rootScope'];

	function config($httpProvider){
		$httpProvider.interceptors.push('bookHttpInterceptor');
	}

	function run($rootScope){
		$rootScope.isLogin = false;
	}
})();

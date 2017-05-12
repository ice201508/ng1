(function(){
    'use strict';

    angular.module('app')
            .factory('bookHttpInterceptor', bookHttpInterceptor);

    bookHttpInterceptor.$inject = ['$q'];

    function bookHttpInterceptor($q){
        return {
            'request': request,
            'requestError': requestError,
            'response': response,
            'responseError': responseError,
        }

        function request(config){
            console.log("页面请求拦截器:  ", config);
            //return config
            return $q.resolve(config);
        }

        function requestError(rejection){
            console.log(rejection);
            return $q.reject(rejection);
        }

        function response(response){
            //console.log(response);
            return response;
        }

        function responseError(rejection){
            console.log(response);
            return $q.reject(rejection);
        }
    }
})();

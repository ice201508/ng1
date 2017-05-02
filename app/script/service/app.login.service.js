;(function(){
  'use strict';

  angular.module('app.service')
    .factory('loginService', loginService);

    loginService.$inject = ['$h'];
    function loginService($h){
        return {
          getAuthCode: getAuthCode,
          registry: registry,
          login: login,
        }

        function getAuthCode(config){
          return $h.http(config);
        }

        function registry(config){
          return $h.http(config);
        }

        function login(config){
          return $h.http(config);
        }
    }
})();

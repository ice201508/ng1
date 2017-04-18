(function(){
  'use strict';

  angular.module('app.service')
    .factory('loginService', loginService);

    loginService.$inject = ['$h'];
    function loginService($h){
        return {
          getAuthCode: getAuthCode
        }

        function getAuthCode(config){
          return $h.http(config);
        }
    }
})()

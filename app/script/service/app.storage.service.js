(function(){
  'use strict';

  angular.module('app.service')
    .factory('bookStorageService', bookStorageService);

  bookStorageService.$inject = ['localStorageService'];

  function bookStorageService(localStorageService){
    return {
      userLoginSet: userLoginSet,
      userLoginGet: userLoginGet,
    }

    function userLoginSet(param){
      if(localStorageService.isSupported){
        localStorageService.set('isLogin', param);
      }
    }

    function userLoginGet(){
      if(localStorageService.isSupported){
        return localStorageService.get('isLogin');
      }
    }
  }
})();

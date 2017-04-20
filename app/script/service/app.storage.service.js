(function(){
  'use strict';

  angular.module('app.service')
    .factory('bookStorageService', bookStorageService);

  bookStorageService.$inject = ['localStorageService'];

  function bookStorageService(localStorageService){
    return {
      userLoginSet: userLoginSet,
      userLoginGet: userLoginGet,
      loginAuthCodeCookieSet: loginAuthCodeCookieSet,
      loginAuthCodeCookieGet: loginAuthCodeCookieGet,
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

    function loginAuthCodeCookieSet(param){
      if(localStorageService.cookie.isSupported){
        return localStorageService.cookie.set('auth_code_confirm', param, 0.1, false);
      }
    }

    function loginAuthCodeCookieGet(){
      if(localStorageService.cookie.isSupported){
        return localStorageService.cookie.get('auth_code_confirm');
      }
    }
  }
})();

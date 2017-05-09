(function(){
  'use strict';

  angular.module('app.service')
    .factory('bookStorageService', bookStorageService);

  bookStorageService.$inject = ['localStorageService'];

  function bookStorageService(localStorageService){
    return {
      setUserInfo: setUserInfo,
      getUserInfo: getUserInfo,
      userLoginSet: userLoginSet,
      userLoginGet: userLoginGet,
      loginAuthCodeCookieSet: loginAuthCodeCookieSet,
      loginAuthCodeCookieGet: loginAuthCodeCookieGet,
    }

    var user = {};

    function setUserInfo(param){
        user = {
            uid: param.uid,
            email: param.email,
        };
        localStorageService.set('userInfo', user);
        return;
    }

    function getUserInfo(){
        return localStorageService.get('userInfo');
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

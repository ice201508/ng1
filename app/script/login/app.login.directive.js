(function(){
  'use strict';

  angular.module('app.login')
      .directive('myLogin', myLogin);

  function myLogin(){
    return {
      replace: true,
      link: link,
    }
  }

  function link(scope, ele, attr){
    
  }
})();

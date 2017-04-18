(function(){
  'use strict';

  angular.module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$state', 'bookStorageService', 'loginService'];

  function loginController($rootScope, $state, bookStorageService, loginService){
    var vm = this;
    vm.getAuthCodeStart = false;
    vm.go_main_state = go_main_state;
    vm.registry = registry;
    vm.getAuthCode = getAuthCode;

    function go_main_state(){
      var vm = this;
      bookStorageService.userLoginSet(true);
      $rootScope.isLogin = bookStorageService.userLoginGet();
      $state.go('main.dashboard');
    }

    function registry(){
      var vm = this;
      $rootScope.isRegistry = true;
    }

    function getAuthCode(){
      var vm = this;
      var config = {
        method: 'GET',
        url: 'http://127.0.0.1:3005/edit',
        params: {data: '这个传递的参数'},
        data: {data: 'message'},
      }
      vm.getAuthCodeStart = true;
      loginService.getAuthCode(config)
        .then(function(data){
          console.log('success: ',data);
        })
        .catch(function(e){
          console.log('err: ',e);
        })
    }

  }

})();

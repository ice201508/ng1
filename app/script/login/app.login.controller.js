(function(){
  'use strict';

  angular.module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$interval', '$rootScope', '$state', 'bookStorageService', 'loginService'];

  function loginController($interval, $rootScope, $state, bookStorageService, loginService){
    var vm = this;
    vm.getAuthCodeStart = false;
    vm.userInfo = {};
    vm.go_main_state = go_main_state;
    vm.registry = registry;
    vm.getAuthCode = getAuthCode;

    function go_main_state(){
      var vm = this;
      var config = {
        method: 'POST',
        url: 'http://127.0.0.1:3005/login',
        data: vm.userInfo,
      }
      if($rootScope.isRegistry){
        vm.userInfo.auth_code_confirm = "953F0E1HB796E408H501";
        loginService.login(config)
          .then(function(data){
            console.log('data: ',data);
            bookStorageService.userLoginSet(true);
            $rootScope.isLogin = bookStorageService.userLoginGet();
            $state.go('main.dashboard');
          })
          .catch(function(e){
            console.log('e: ',e);
          })
        } else {
          loginService.login(config)
          .then(function(data){
            console.log('data: ',data);
            bookStorageService.userLoginSet(true);
            $rootScope.isLogin = bookStorageService.userLoginGet();
            $state.go('main.dashboard');
          })
          .catch(function(e){
            console.log('e: ',e);
          })
        }
    }

    function registry(){
      var vm = this;
      $rootScope.isRegistry = true;
      vm.userInfo.password = '';
    }

    function go_back(){
      vm.userInfo.password = '';
      $rootScope.isRegistry = false;
    }

    function getAuthCode(){
      var vm = this;
      var config = {
        method: 'POST',
        url: 'http://127.0.0.1:3005/authcode',
        params: {data: Date.now()},
      }
      vm.getAuthCodeStart = true;
      vm.leftTime=10;
      var clearTimeInterval = $interval(function(){
        if(vm.leftTime<1){
          vm.getAuthCodeStart = false;
          $interval.cancel(clearTimeInterval);
        }
        vm.leftTime -= 1;
      },1000)
      loginService.getAuthCode(config)
        .then(function(data){
          vm.userInfo.auth_code_confirm = data.auth_code_confirm
          console.log('success: ',data);
        })
        .catch(function(e){
          console.log('err: ',e);
        })
    }

  }

})();

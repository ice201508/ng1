(function(){
  'use strict';

  angular.module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$interval', '$rootScope', '$state', 'bookStorageService', 'loginService', '$h', 'logger'];

  function loginController($scope, $interval, $rootScope, $state, bookStorageService, loginService, $h, logger){
    var vm = this;
    vm.userInfo = {};
    vm.go_main_state = go_main_state;
    vm.registry = registry;
    vm.go_back = go_back;
    vm.getAuthCodeStart = false;
    vm.getAuthCode = getAuthCode;

    function go_main_state(){
      var vm = this;
      console.log('this: ', this);
      console.log('$scope: ', $scope);
      var config = {
        method: 'POST',
        url: 'http://127.0.0.1:3005/login',
        data: vm.userInfo,
      }
      if($rootScope.isRegistry){
        vm.userInfo.auth_code_confirm = bookStorageService.loginAuthCodeCookieGet();
        loginService.login(config)
          .then(function(data){
            logger.success('注册成功，并登录');
            bookStorageService.userLoginSet(true);
            $rootScope.isLogin = bookStorageService.userLoginGet();
            $state.go('main.dashboard');
          })
          .catch(function(e){
            logger.error(e.message);
          })
      } else {
          loginService.login(config)
          .then(function(data){
            logger.success(data.message);
            bookStorageService.userLoginSet(true);
            $rootScope.isLogin = bookStorageService.userLoginGet();
            $state.go('main.dashboard');
          })
          .catch(function(e){
            logger.error(e.message);
          })
        }
    }

    function registry(){
      var vm = this;
      $rootScope.isRegistry = true;
      vm.userInfo.password = '';
      var config = {
        method: 'POST',
        url: 'http://127.0.0.1:3005/registry',
        params: {data: Date.now()},
      }
      $h.http(config)
        .then(function(data){
          
        })
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
          logger.success("验证码已发送");
          vm.userInfo.auth_code_confirm = data.auth_code_confirm
          bookStorageService.loginAuthCodeCookieSet(data.auth_code_confirm)
        })
        .catch(function(e){
          console.log('err: ',e);
        })
    }

  }

})();

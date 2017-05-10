(function(){
  'use strict';

  angular.module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$interval', '$rootScope', '$state', 'bookStorageService', 'loginService', '$h', 'logger', 'constService'];

  function loginController($scope, $interval, $rootScope, $state, bookStorageService, loginService, $h, logger, constService){
    var vm = this;
    vm.userInfo = {};
    vm.go_main_state = go_main_state;
    vm.registry = registry;
    vm.loginKeypress = loginKeypress;
    vm.go_back = go_back;
    vm.getAuthCodeStart = false;
    vm.getAuthCode = getAuthCode;

    function go_main_state(){
      var vm = this;
      var pattern = /^\w+[\w-]*@[a-z0-9]+\.com|^root$/;
      var patternIsRegistry = /^\w+[\w-]*@[a-z0-9]+\.com/;
      var patternNumber = /^\d{4}$/;
      //console.log('this: ', this);
      //console.log('$scope: ', $scope);
      var config = {
        method: 'POST',
        url: constService.SERVER_NAME + '/login',
        data: vm.userInfo,
      }
      if($rootScope.isRegistry){
        if(vm.userInfo.email && vm.userInfo.password && vm.userInfo.auth_code && patternNumber.test(vm.userInfo.auth_code) && patternIsRegistry.test(vm.userInfo.email)) {
          vm.userInfo.auth_code_confirm = bookStorageService.loginAuthCodeCookieGet();
          vm.userInfo.auth_code = parseInt(vm.userInfo.auth_code).toString();
          loginService.login(config)
            .then(function(data){
              logger.success('注册成功，并登录');
              bookStorageService.setUserInfo(data);
              bookStorageService.userLoginSet(true);
              $rootScope.isLogin = bookStorageService.userLoginGet();
              $state.go('main.dashboard');
            })
            .catch(function(e){
              logger.error(e.message);
            })
          } else {
            logger.error('请输入正确的用户名、密码或验证码');
          }
      } else {
          if(vm.userInfo.email && vm.userInfo.password && pattern.test($.trim(vm.userInfo.email))){  //去掉字符串首位空格
            loginService.login(config)
              .then(function(data){
                logger.success(data.message);
                bookStorageService.setUserInfo(data);
                bookStorageService.userLoginSet(true);
                $rootScope.isLogin = bookStorageService.userLoginGet();
                $state.go('main.dashboard');
              })
              .catch(function(e){
                logger.error(e.message);
              })
          } else {
            logger.error('请输入正确的用户名或密码');
          }
        }
    }

    function registry(){
      var vm = this;
      $rootScope.isRegistry = true;
      vm.userInfo.password = '';
      var config = {
        method: 'POST',
        url: constService.SERVER_NAME + '/registry',
        params: {data: Date.now()},
      }
      $h.http(config)
        .then(function(data){
          
        })
    }

    function loginKeypress(e){
      if(vm.userInfo.email && vm.userInfo.password){
        if(e.keyCode == 13){
          vm.go_main_state();
        }
      }
    }

    function go_back(){
      vm.userInfo.password = '';
      vm.userInfo.auth_code = null
      $rootScope.isRegistry = false;
    }

    function getAuthCode(){
      var vm = this;
      var config = {
        method: 'POST',
        url: constService.SERVER_NAME + '/authcode',
        params: {email: vm.userInfo.email},
      }
      if(vm.userInfo.email) {
        vm.getAuthCodeStart = true;
        vm.leftTime=60;
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
          } else {
              logger.error('请输入您的邮箱');
          }
      
    }

  }

})();

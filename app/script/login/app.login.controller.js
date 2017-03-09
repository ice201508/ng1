(function(){
  'use strict';

  angular.module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$state', 'bookStorageService'];

  function loginController($rootScope, $state, bookStorageService){
    var vm = this;
    vm.title = "login";
    vm.go_main_state = go_main_state;
    
    function go_main_state(){
      var vm = this;

      bookStorageService.userLoginSet(true);
      $rootScope.isLogin = bookStorageService.userLoginGet();
      $state.go('main.dashboard');
    }

  }

})();

;(function(){
  'use strict';

  angular.module('app.order')
    .controller('profileController', profileController)

    profileController.$inject = ['bookStorageService']
    function profileController(bookStorageService){
      var vm =this;
      vm.userInfo = {
        email: null,
        tel: null,
      }
      if (bookStorageService.getUserInfo().email === "root") {
        vm.userInfo.email = bookStorageService.getUserInfo().email;
        vm.userInfo.tel = "13692125490";
      }
    }
})();

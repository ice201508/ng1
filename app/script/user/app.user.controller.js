(function(){
  'use strict';

  angular.module('app.user')
    .controller('userController', orderController)

    orderController.$inject = []
    function orderController(){
      var vm =this;
      vm.message="user22222222";
      console.log('user');
    }
})();

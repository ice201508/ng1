(function(){
  'use strict';

  angular.module('app.user')
    .controller('userController', orderController)

    orderController.$inject = []
    function orderController(){
      var vm =this;
      vm.users = [
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
      ]
    }
})();

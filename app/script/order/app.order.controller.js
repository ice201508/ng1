;(function(){
  'use strict';

  angular.module('app.order')
    .controller('orderController', orderController)

    orderController.$inject = []
    function orderController(){
      var vm =this;
      vm.orders = [
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

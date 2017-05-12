;(function(){
    'use strict';

    angular.module('app.common')
        .controller('otherCtrl', otherCtrl)

    otherCtrl.$inject = ['$uibModalInstance', 'items'];

    function otherCtrl($uibModalInstance, items){
        var vm = this;
        vm.name = 'self modal'
        vm.items = items;
        console.log('items: ',items);
    }


})();

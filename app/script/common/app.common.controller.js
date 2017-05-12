;(function(){
    'use strict';

    angular.module('app.common')
        .controller('otherCtrl', otherCtrl)

    otherCtrl.$inject = ['$uibModalInstance'];

    function otherCtrl($uibModalInstance){
        var vm = this;
        vm.name = 'self modal';
    }


})();

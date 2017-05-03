(function(){
    'use strict';

    angular.module('app.header')
            .controller('headerController', headerController);

    //这种注入方式便于单元测试以及阅读
    headerController.$inject = ['$filter', '$timeout'];

    function headerController($filter, $timeout){
        var vm = this;
        vm.status = {
            isopen: false
        }
        vm.ele = angular.element(document.querySelector('.l-header'));

        $timeout(function(){
            console.log('注入')
        }, 2000);
    }
})();

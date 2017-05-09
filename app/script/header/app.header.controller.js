(function(){
    'use strict';

    angular.module('app.header')
            .controller('headerController', headerController);

    //这种注入方式便于单元测试以及阅读
    headerController.$inject = ['$filter', '$timeout', 'bookStorageService'];

    function headerController($filter, $timeout, bookStorageService){
        var vm = this;
        vm.status = {
            email: bookStorageService.getUserInfo().email,
        }
        vm.getUserInfo = getUserInfo;
        vm.ele = angular.element(document.querySelector('.l-header'));

        // $timeout(function(){
        //     console.log('注入')
        // }, 2000);

        function getUserInfo(){
            console.log(bookStorageService.getUserInfo());
        }        
    }
})();

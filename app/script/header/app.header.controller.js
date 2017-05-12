(function(){
    'use strict';

    angular.module('app.header')
            .controller('headerController', headerController);

    //这种注入方式便于单元测试以及阅读
    headerController.$inject = ['$rootScope', '$filter', '$timeout', 'bookStorageService'];

    function headerController($rootScope, $filter, $timeout, bookStorageService){
        var vm = this;
        vm.status = {
            email: bookStorageService.getUserInfo().email,
        }
        vm.getUserInfo = getUserInfo;
        vm.toggleNav = toggleNav;
        vm.back = back;
        vm.ele = angular.element(document.querySelector('.l-header'));

        // $timeout(function(){
        //     console.log('注入')
        // }, 2000);

        function getUserInfo(){
            console.log(bookStorageService.getUserInfo());
        }

        function toggleNav(){
            console.log($rootScope.toggle_nav);
            $rootScope.toggle_nav = !$rootScope.toggle_nav;
        }

        function back(){
            history.back();
        }
    }
})();

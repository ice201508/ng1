;(function(){
    'use strict';

    angular.module('app.nav')
        .controller('navController', navController);

    navController.$inject = ['bookStorageService'];

    function navController(bookStorageService){
        var vm = this;
        vm.user = bookStorageService.getUserInfo();
        vm.confirAdminAccess = confirAdminAccess;

        function confirAdminAccess(){
            return vm.user && vm.user.email && vm.user.email === 'root';
        }
    }
})();

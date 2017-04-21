(function(){
    'use strict';

    angular.module('app.book')
        .controller('oneBookController', oneBookController);

    oneBookController.$inject = ['$h', 'logger', '$state'];

    function oneBookController($h,logger,$state){
        var vm = this;
        var detail = {};
        console.log($state.params.bookid);

        function getSepecificBook(){
            var config = {
                method: 'GET',
                url: 'http://127.0.0.1:3005/book/onebook/' + $state.params.bookid
            }

            $h.http(config)
                .then(function(data){
                    console.log('data: ',data);
                    vm.detail = data.book
                })
                .catch(function(e){
                    logger.error('请求失败')
                })
        }

        getSepecificBook()
    }
})();

(function(){
    'use strict';

    angular.module('app.book')
        .controller('allBookController', allBookController);

    allBookController.$inject = ['$h', 'logger', '$state', 'constService'];

    function allBookController($h, logger, $state, constService){
        var vm = this;
        vm.books = [];
        vm.addNewBook = addNewBook;
        vm.selectOne = selectOne;

        function addNewBook(){
            $state.go('main.book.edit_book_info');
        }

        function selectOne(id){
            $state.go('main.book.one_book_info', {bookid: id});
        }

        function getAllBook(){
            var config = {
                method: 'GET',
                url: constService.SERVER_NAME + '/book/allbooks'
            }
            $h.http(config)
                .then(function(data){
                    vm.books = data.books
                })
                .catch(function(err){
                    logger.error('获取书籍列表失败')
                })
        }

        getAllBook()
    }
})();

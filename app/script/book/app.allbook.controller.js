(function(){
    'use strict';

    angular.module('app.book')
        .controller('allBookController', allBookController);

    allBookController.$inject = ['$h', 'logger', '$state'];

    function allBookController($h, logger, $state){
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
                url: 'http://127.0.0.1:3005/book/allbooks'
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

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
        vm.editOne = editOne;
        vm.deleteOne = deleteOne;

        function addNewBook(){
            $state.go('main.book.edit_book_info');
        }

        function selectOne(id){
            $state.go('main.book.one_book_info', {bookid: id});
        }

        function editOne(id){
            $state.go('main.book.edit_book_info');
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

        function deleteOne(id){
            var config = {
                method: 'POST',
                url: constService.SERVER_NAME + '/book/deleteOne',
                data: {
                    bid: id,
                }
            }
            $h.http(config)
                .then(function(data){
                     logger.success(data.message || '删除成功');
                     getAllBook();
                })
                .catch(function(e){
                    logger.error(e.message || '获取书籍列表失败')
                })
        }

        getAllBook()
    }
})();

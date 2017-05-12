(function(){
    'use strict';

    angular.module('app.book')
        .controller('allBookController', allBookController)
        .controller('confirmCtrl', confirmCtrl)

    allBookController.$inject = ['$h', '$uibModal', 'logger', '$state', 'constService'];
    confirmCtrl.$inject = ['$uibModalInstance', 'items'];

    function allBookController($h, $uibModal, logger, $state, constService){
        var vm = this;
        vm.books = [];
        vm.addNewBook = addNewBook;
        vm.selectOne = selectOne;
        vm.editOne = editOne;
        vm.deleteOne = deleteOne;

        function addNewBook(){
            $state.go('main.book.edit_book_info', {bookid: 0});
        }

        function selectOne(id){
            $state.go('main.book.one_book_info', {bookid: id});
        }

        function editOne(id){
            $state.go('main.book.edit_book_info', {bookid: id});
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

        function deleteOneAjax(id){
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

        function deleteOne(id){
            var modalInstance = $uibModal.open({
                animation: true,  //是否开启动画
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '../../tpls/confirm.html',
                controller: 'confirmCtrl',
                controllerAs: '$ctrl',
                size: 'sm',
                // appendTo: undefined,
                resolve: {
                    items: function(){
                        return [1,2,3];
                    }
                } 
            })

            modalInstance.result.then(function(item){
                deleteOneAjax(id)
            }, function(e){
                console.log('456: ',e);
            })
        }

        getAllBook()
    }

    function confirmCtrl($uibModalInstance, items){
        var vm = this;
        vm.name = 123
        vm.items = [];
        vm.ok = ok;
        vm.cancel = cancel;

        function ok(){
          $uibModalInstance.close('传输');
        }

        function cancel(){
          $uibModalInstance.dismiss('cancel');
        }
    }
})();

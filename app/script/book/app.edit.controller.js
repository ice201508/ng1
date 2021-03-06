(function(){
  'use strict';

  angular.module('app.book')
    .controller('editController', editController);

    editController.$inject = ['$scope', '$sce', '$state', '$timeout', '$h', 'logger', 'FileUploader', 'constService'];

    function editController($scope, $sce, $state, $timeout, $h, logger, FileUploader, constService){
      var vm = this;
console.log('$state.params.bookid: ',$state.params.bookid);
      vm.book_detail = {};
      vm.submit = submit;
      vm.uploader = new FileUploader({
        url: 'http://upload.qiniu.com',
      });
      vm.book_detail.imgUrl = '';
      vm.book_detail.imgTitle = '书籍';
      vm.book_detail.rate = 7;
      vm.max = 10;
      vm.isReadonly = false;
      vm.tipsTem = $sce.trustAsHtml('ssss<b>bold</b>!');
      vm.hoveringOver = function(value) {
          vm.overStar = value;
          return vm.percent = 100 * (value / vm.max);
      };
      vm.uploadToQiniu = uploadToQiniu;

      function uploadToQiniu(files){
        console.log('file: ', files);
        $h.http({
          method: 'GET',
          url: constService.SERVER_NAME + '/upload/qiniu_token',
        }).then(function(data){
          var formData = new FormData();
          formData.append('file', files[0]);
          formData.append('token', data.token);
          $timeout(function(){
            console.log('formData: ', formData);
          })
          
          $h.http({
            method: 'POST',
            url: 'http://upload.qiniu.com',
            data: formData,
            //post默认的请求头部content-type是application/json, 不用指定multipart/form-data
            headers: {'Content-Type':undefined},
          }).then(function(data){
            vm.book_detail.imgUrl = "http://oopbykx1v.bkt.clouddn.com/" +data.key
            logger.success('上传成功')
          }).catch(function(e){
            logger.error('上传失败')
          })
        })
        .catch(function(e){
          logger.error(e.message || "获取token失败");
        })
      }

      vm.uploader.onAfterAddingFile = function(item){
        console.log('item: ',item);
        var config = {
          method: 'GET',
          url: constService.SERVER_NAME + '/upload/qiniu_token',
        }
        $h.http(config)
          .then(function(data){
            logger.success("token获取成功");
            item.formData.push({'token' : data.token})
            console.log(item.formData);
          })
          .catch(function(e){
            logger.error(e || "token获取失败");
          })
          console.log(vm.uploader);
      }

      function submit(){
        console.log('vm.book_detail: ',vm.book_detail);
        var config = {
          method: 'POST',
          url: constService.SERVER_NAME + '/book/edit',
          data: vm.book_detail,
        }
        $h.http(config)
          .then(function(data){
            logger.success('添加书籍成功');
            $state.go('main.book.all_book_info');
          })
          .catch(function(e){
            logger.error('添加书籍出错')
          })
      }

      function getOneBookDetail(){
        var config = {
            method: 'GET',
            url: constService.SERVER_NAME + '/book/onebook/' + $state.params.bookid
        }
        $h.http(config)
          .then(function(data){
            vm.book_detail = {
              bname: data.book[0].bname,
              author: data.book[0].author,
              intro: data.book[0].intro,
              price: data.book[0].price,
              imgUrl: data.book[0].img_url,
              detail: data.book[0].detail,
              rate: data.book[0].rate,
            }
            return;
          })
          .catch(function(e){
            logger.error('添加书籍出错')
            return;
          })
      }

      if($state.params.bookid != 0) {
        getOneBookDetail();
      }
    }
})();

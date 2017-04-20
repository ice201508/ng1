(function(){
  'use strict';

  angular.module('app.edit')
    .controller('editController', editController);

    editController.$inject = ['$scope', '$sce', '$h', 'logger', 'FileUploader'];

    function editController($scope, $sce,$h, logger, FileUploader){
      var vm = this;

      vm.book_detail = {};
      vm.submit = submit;
      vm.uploader = new FileUploader({
        url: 'http://upload.qiniu.com',
        autoUpload: true,
        filters: [{
          name: 'one_file',
          fn: function(item){
            return item.queueLimit =1
          }
        }]
      });
      vm.book_detail.rate = 7;
      vm.max = 10;
      vm.isReadonly = false;
      vm.tipsTem = $sce.trustAsHtml('ssss<b>bold</b>!');
      vm.hoveringOver = function(value) {
          vm.overStar = value;
          return vm.percent = 100 * (value / vm.max);
      };
      vm.uploadToQiniu = uploadToQiniu;

      function uploadToQiniu(){
        $h.http({
          method: 'GET',
          url:'http://127.0.0.1:3005/upload/qiniu_token',
        }).then(function(data){
          var formData = new FormData();
          formData.append('file', document.querySelector('#self-qiniu-upload').files[0]);
          formData.append('token', data.token);
          $h.http({
            method: 'POST',
            url: 'http://upload.qiniu.com',
            data: formData,
            processData: false,
            contentType: false,
          }).then(function(data){
            var imgUrl = "oopbykx1v.bkt.clouddn.com" +data.key
            logger.success(imgUrl)
          }).catch(function(e){
            console.log('e: ',e);
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
          url: 'http://127.0.0.1:3005/upload/qiniu_token',
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
        logger.info('提示成功');
        logger.success('提示成功');
        logger.error('提示成功');
        logger.warning('提示成功');
        console.log('vm.book_detail: ',vm.book_detail);
      }
    }
})();

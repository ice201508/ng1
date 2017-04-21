(function(){
  'use strict';

  angular.module('app.user')
    .controller('userController', orderController)

    orderController.$inject = ['$h', 'logger']
    function orderController($h, logger){
      var vm =this;
      vm.users = [];

      function getAllUser(){
        var config = {
          method: 'POST',
          url: 'http://127.0.0.1:3005/user/get_all'
        }
        $h.http(config)
          .then(function(data){
            vm.users = data.users;
          })
          .catch(function(e){
            logger.error("获取所有用户列表失败")
          })
      }

      getAllUser();


      vm.users = [
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
        {project: 'TWLT', status: 'pending', manager: 'Amery lee', progress: '45%'},
      ]
    }
})();

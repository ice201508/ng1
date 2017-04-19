(function(){
  'use strict';

  angular.module('app.service')
    .factory('$h', httpServer)

  httpServer.$inject = ['$http', '$q'];
  function httpServer($http, $q){
    return {
      http: http
    };

    //封装http服务
    function http(config){
      console.log('config: ',config);
      var defer = $q.defer();

      function success(res){
        //处理http返回的默认结果
        var data = res.data
        if(data.code && data.code <0){
          defer.reject(data);
        }
        defer.resolve(data);
      }
      function error(res){
        var data = res.data;
        defer.reject({message: data});
      }

      var _config = _extend(config);
      $http(_config).then(success, error);

      return defer.promise;
    }

    //合并请求参数
    function _extend(config){
      var _config = {};
      switch(config['method']){
        case 'GET':
          _config['method'] = config['method'];
          _config['url'] = config['url'];
          _config['params'] = config['param']? config['param']:'';
          break;
        case 'POST':
          _config['method'] = config['method'];
          _config['url'] = config['url'];
          _config['params'] = config['param']? config['param']:'';
          _config['data'] = config['param'] ? config['param'] : '';
          break;
        default:
            break;
      }
      return config
    }
  }
})();

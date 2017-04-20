(function(){
  'use strict';

  angular.module('app.service')
    .factory('logger', logger)

  function logger(){
    toastr.options = {
      closeButton: true,
      closeMethod: 'fadeOut',
      timeOut: 3000,
      progressBar: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: false,  //阻止生成多个
    }

    function logType(message, type){
      return toastr[type](message);
    }

    return {
      info: function(message){
        return logType(message, 'info')
      },
      warning: function(message){
        return logType(message, 'warning')
      },
      success: function(message){
        return logType(message, 'success')
      },
      error: function(message){
        return logType(message, 'error')
      },
      clear: function(){
        return toastr.clear();
      },
      remove: function(){
        return toastr.remove();
      }
    }
  }
})();

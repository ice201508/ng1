(function(){
  'use strict';

  angular.module('app.login')
      .directive('hasLoading', hasLoading);

  hasLoading.$inject = ['$rootScope'];
  function hasLoading($rootScope){
    return {
      replace: true,
      link: link,
    }

    function link(scope, ele, attr){
      console.log(ele);
      console.log($(ele));
      console.log(angular.element(ele));

      scope.$watch($rootScope.isFinishedLoading, function(newVal, oldVal){
        if(!newVal){
          console.log("指令内部");
          $(ele).remove();
        }
      })
    }
  }
})();

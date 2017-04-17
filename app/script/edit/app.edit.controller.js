(function(){
  'use strict';

  angular.module('app.edit', [])
    .controller('editController', editController);

    editController.$inject = ['$http'];

    function editController($http){
      var vm = this;

      vm.book_detail = {};
      vm.submit = submit;
      vm.book_detail.rate = 7;
      vm.max = 10;
      vm.isReadonly = false;
      vm.hoveringOver = function(value) {
          vm.overStar = value;
          return vm.percent = 100 * (value / vm.max);
      };
      vm.ratingStates = [
          {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
          {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
          {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
          {stateOn: 'glyphicon-heart'},
          {stateOff: 'glyphicon-off'}
      ];


      function submit(){
        console.log('vm.book_detail: ',vm.book_detail);
      }
    }
})();

(function(){
  'use strict';

  angular.module('app.chart')
    .controller('chartController', chartController);

    chartController.$inject = ['$interval'];

    function chartController($interval){
        var vm =this;
        vm.DoughnutLabels = ["卖出的数量", "各种书籍分类", "各类书籍销量"];
        vm.DoughnutData = [300, 500, 100];
        vm.radarLabels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        vm.radarData = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];
        
        var rNum =null;
        $interval(function(){
            rNum = Math.floor(Math.random() *10) * 100;
            vm.DoughnutData = [rNum*2, rNum*3, rNum*4];
        }, 1500)
    }
})();

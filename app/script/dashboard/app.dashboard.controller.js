(function(){
	'use strict';

	angular.module('app.dashboard')
			.controller('dashboardController', dashboardController);

	dashboardController.$inject = ['$rootScope'];

	function dashboardController($rootScope){
		var vm = this;
            vm.message= "3333333333333";
            vm.labels = ["卖出的数量", "各种书籍分类", "各类书籍销量"];
            vm.data = [300, 500, 100];
            vm.data_bar = [
              [65, 59, 80, 81, 56, 55, 40],
              [28, 48, 40, 19, 86, 27, 90]
            ]
            vm.labels_bar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            vm.series_bar = ['Series A', 'Series B'];
            vm.options_bar = {
              tooltip : {
                  trigger: 'axis'
              },
              legend: {
                data: ['用户', '订单'],
              },
              title: {
                display: true,
                fontSize: 18,
                fontColr: '#000',
                padding: 10,
                text: '日流水'
              },
              legend: {
                display: true,
                fontSize: 20,
              },
            }
            console.log(123);
	}
})();

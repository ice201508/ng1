(function(){
    'use strict';

    angular.module('app.chart', ['chart.js'])
        .config(config);

        config.$inject = ['ChartJsProvider'];
        function config(ChartJsProvider){
            ChartJsProvider.setOptions({
                chartColors: ['#FF5252', '#FF8A80'],
                responsive: false
            });
            ChartJsProvider.setOptions('line', {
                showLines: false
            });
        }
})();

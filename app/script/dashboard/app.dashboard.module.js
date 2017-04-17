(function(){
    'use strict';

    angular.module('app.dashboard', ['chart.js'])
        .config(config);

        config.$inject = ['ChartJsProvider'];
        function config(ChartJsProvider){
            ChartJsProvider.setOptions({
                colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                defaultFontColor: '#fff',
                defaultFontFamily: '"Microsoft YaHei", "Lato", "Helvetica Neue", Arial, sans-serif',
                responsive: true
            });
            ChartJsProvider.setOptions('line', {
                showLines: false
            });
            ChartJsProvider.setOptions('doughnut', {
                title: {
                    display: true,
                    fontSize: 18,
                    fontColr: '#000',
                    padding: 10,
                    text: '自定义title'
                },
                animation: {
                    animateScale:true
                },
                legend: {
                    display: true,
                    orient : 'vertical',
                    position: 'left',
                    fullWidth: false,
                    fontSize: 20,
                    fontColor: '#fff',
                    padding: 10,
                    text: '另一个title',
                }
            });
        }
})();

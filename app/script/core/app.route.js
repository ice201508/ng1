(function(){
  'use strict';

  angular.module('app')
      .config(config);

  config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  function config($locationProvider, $stateProvider, $urlRouterProvider){
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/script/login/app.login.html',
      controller: 'loginController',
      controllerAs: 'vmLogin',
    })
    .state('main', {
      templateUrl: '/script/core/main.html',
    })
    .state('main.dashboard', {
      url: '/book/dashboard',
      templateUrl: 'script/dashboard/app.dashboard.html',
      constroller: 'dashboardController',
      controllerAs: 'vmDashboard',
    })
    .state('main.chart', {
      url: '/book/chart',
      templateUrl: 'script/chart/app.chart.html',
      controller: 'chartController',
      controllerAs: 'vmChart',
    })

    $urlRouterProvider.otherwise('/login');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
  }
})();

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
      controller: 'dashboardController',
      controllerAs: 'vmDashboard',
    })
    .state('main.order', {
      url: '/book/order',
      templateUrl: 'script/order/app.order.html',
      controller: 'orderController',
      controllerAs: 'vmOrder',
    })
    .state('main.user', {
      url: '/book/user',
      templateUrl: 'script/user/app.user.html',
      controller: 'userController',
      controllerAs: 'vmUser',
    })
    .state('main.edit', {
      url: '/book/edit',
      templateUrl: 'script/edit/app.edit.html',
      controller: 'editController',
      controllerAs: 'vmEdit',
    })

    $urlRouterProvider.otherwise('/login');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
  }
})();

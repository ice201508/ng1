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
    .state('main.book', {
      template: '<div ui-view></div>'
    })
    .state('main.book.edit_book_info',{
      url: '/book/letter/edit',
      templateUrl: 'script/book/app.edit.html',
      controller: 'editController',
      controllerAs: 'vmEdit',
    })
    .state('main.book.all_book_info',{
      url: '/book/letter/info',
      templateUrl: 'script/book/app.allbook.html',
      controller: 'allBookController',
      controllerAs: 'vmAllBook',
    })
    .state('main.book.one_book_info',{
      url: '/book/letter/:bookid',
      templateUrl: 'script/book/app.onebook.html',
      controller: 'oneBookController',
      controllerAs: 'vmOneBook',
    })
    .state('main.profile', {
      url: '/book/profile',
      templateUrl: 'script/profile/app.profile.html',
      controller: 'profileController',
      controllerAs: 'vmProfile',
    })

    $urlRouterProvider.otherwise('/login');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(false);
  }
})();

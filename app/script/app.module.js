(function(){
  'use strict';

  angular.module('app', [
    //3rd party modules
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'LocalStorageModule',

    //custom modules
    'app.nav',
    'app.header',
    'app.login',
    'app.dashboard',
    'app.chart',
    'app.service',
    'app.filter',
  ]);

})();

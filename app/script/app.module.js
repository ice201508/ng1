(function(){
  'use strict';

  angular.module('app', [
    //3rd party modules
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'LocalStorageModule',
    'angularFileUpload',

    //custom modules
    'app.service',
    'app.filter',
    'app.nav',
    'app.header',
    'app.login',
    'app.dashboard',
    'app.book',
    'app.user',
    'app.order',
  ]);

})();

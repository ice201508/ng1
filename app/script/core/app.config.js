(function(){
  'use strict';

  angular.module('app')
    .config(config)
    .run(run);

  config.$inject = ['$httpProvider', 'localStorageServiceProvider'];
  run.$inject = ['$rootScope', '$timeout', '$state', 'bookStorageService'];

  function config($httpProvider, localStorageServiceProvider){
    $httpProvider.interceptors.push('bookHttpInterceptor');
    localStorageServiceProvider
      .setPrefix("book_storage")
      .setDefaultToCookie(false);
  }

  function run($rootScope, $timeout, $state, bookStorageService){

    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateChangeSuccess', loginChangeSuccess);
    //初始化是否加载完成
    $rootScope.isFinishedLoading = false;
    //是否是注册界面
    $rootScope.isRegistry = false;

    //小屏动态切换nav
    $rootScope.toggle_nav = false;

    function stateChangeStart(event, toState, toParams, fromState, fromParams, options){
      console.log("路由跳转和拦截器哪个先执行,这里是路由跳转  ", toState.url);
      $rootScope.isLogin = bookStorageService.userLoginGet();
      if(toState.url != "/login") {
        if(!$rootScope.isLogin){
          event.preventDefault()
          //console.log('event:  ', event, toState.url, fromState);
          $state.go('login');
        }
      }
    }

    function loginChangeSuccess(event, toState, toParams, fromState, fromParams){
      if(toState.url == '/login') {
        console.log('切换到登录login界面成功:  ', toState);
        $rootScope.isFinishedLoading = true;
        
        // $timeout(function(){
        //   $rootScope.isFinishedLoading = true;
        // },3000);
      }
    }
  }
})();

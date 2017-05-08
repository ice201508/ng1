;(function(){
    'use strict';

    angular.module('app.service')
        .factory('constService', constService)

        function constService(){
            return {
                // SERVER_NAME: 'http://www.leijiuling.com'
                SERVER_NAME: 'http://localhost:3000'
            }
        }
})();

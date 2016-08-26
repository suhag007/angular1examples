(function () {
    'use strict';

    angular
            .module('routerApp')
            .factory('requestdata', requestdata);
    function requestdata($http) {
        return {
            callapi: function(data){
                return $http(data);
             }
        
    };
  };  
})();


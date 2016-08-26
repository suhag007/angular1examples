(function () {
    'use strict';

    angular
            .module('routerApp')
            .factory('requestdata', requestdata);
    function requestdata($http, $q, api) {

        return {
            callapi: function (path, userdetail) {
//                console.log(userdetail);
                var deferred = $q.defer();
                var req = {
                    method: 'POST',
                    url: api.configApi + path,
                    headers: {
                        'Content-Type': 'application/json',
                        'APP_ID': 'com.tethr'
                    },
                    data: userdetail,
                    timeout: 60000
                };
                console.log(req);
                var http = $http(req);
                http.success(function (data) {
                    console.log(data);
                    deferred.resolve(data);
                });
                http.error(function (data) {
                    console.log(data);
                    deferred.reject(data);
                });
                return deferred.promise;
            }

        };
    }
    ;
})();

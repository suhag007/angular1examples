(function(){
    'use strict';
    
    angular
       .module('routerApp')
       .controller('home',home); 

function home($scope, $http, $location,$localStorage,$state,requestdata ,timeStorage) {
        $scope.check = function () {
            if (timeStorage.get("username") == false && timeStorage.get("access_token") == false)
            {    
                $state.go('login');
               
            } else {
                $scope.username = timeStorage.get("username");
                return true;
            }
        };
        $scope.signout = function () {
             $localStorage.$reset();
             timeStorage.remove("username");
             timeStorage.remove("access_token");
             $state.go('login');
        };
    };

})();


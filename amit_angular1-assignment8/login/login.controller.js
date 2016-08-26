(function () {
    'use strict';

    angular
            .module('routerApp')
            .controller('login', login);
    function login($scope, $http, $location,$localStorage,$state,$q, requestdata ,timeStorage) {


        $scope.mustShow = false;
        $scope.login1 = function () {
            var userdetail={
                email : $scope.email,
                password : $scope.password
            };
            console.log(userdetail);
            var promise = requestdata.callapi("login/",userdetail);
            promise.then(
                    function (response) {
                        console.log(response);
                        $scope.email = '';
                        $scope.password = '';
                        $scope.mustShow = true;
                        $scope.message = response.message;
                        timeStorage.set("username",response.data.firstname,10);
                        timeStorage.set("access_token",response.data.access_token,10);
                         $state.go('home');
                    },
                    function (error) {
                        console.log(error);
                        $scope.mustShow = true;
                        $scope.message = error.message;
                        $scope.email = '';
                        $scope.password = '';
                    }
            );

        };
        $scope.check = function () {

            if (timeStorage.get("username") != false && timeStorage.get("access_token") != false)
            {
                $state.go('home');
            }
        };
    }
    ;

})();
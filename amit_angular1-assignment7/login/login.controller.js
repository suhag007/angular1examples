(function () {
    'use strict';

    angular
            .module('routerApp')
            .controller('login', login);
    function login($scope, $http, $location,$localStorage,$state, requestdata ,timeStorage) {


        $scope.mustShow = false;
        $scope.login1 = function () {
            var login_url = "http://144.76.34.244:8080/magento/1.9/web/index.php/excellence/mobile/api/v1/customer/login/";
            var req = {
                method: 'POST',
                url: login_url,
                headers: {
                    'Content-Type': 'application/json',
                    'APP_ID': 'com.tethr'
                },
                data: {
                    email: $scope.email,
                    password: $scope.password
                }
            };
            var promise = requestdata.callapi(req);
            promise.then(
                    function (response) {
                        $scope.email = '';
                        $scope.password = '';
                        $scope.mustShow = true;
                        $scope.message = response.message;
                        timeStorage.set("username",response.data.data.firstname,10);
                        timeStorage.set("access_token",response.data.data.access_token,10);
                         $state.go('home');
                    },
                    function (error) {
                        console.log(error);
                        $scope.mustShow = true;
                        $scope.message = error.data.message;
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
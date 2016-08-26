(function () {
    'use strict';

    angular
            .module('routerApp')
            .controller('register', register);

    function register($scope, $http, $location,$localStorage,$state, requestdata,timeStorage) {

        $scope.mustShow = false;
        var register_url = "http://144.76.34.244:8080/magento/1.9/web/index.php/excellence/mobile/api/v1/customer/register/";
        $scope.register = function () {
            var req = {
                method: 'POST',
                url: register_url,
                headers: {
                    'Content-Type': 'application/json',
                    'APP_ID': 'com.tethr'
                },
                data: {
                    firstname: $scope.firstname,
                    lastname: $scope.lastname,
                    email: $scope.email,
                    password: $scope.password
                }
            };
            var promise = requestdata.callapi(req);
            promise.then(
                    function (response) {
                        $scope.firstname = '';
                        $scope.lastname = '';
                        $scope.email = '';
                        $scope.password = '';
                        $scope.mustShow = true;
                        $scope.message = response.data.message;
                    },
                    function (errorresponse) {
                        console.log(errorresponse);
                        $scope.mustShow = true;
                        $scope.message = errorresponse.data.message;
                        $scope.firstname = '';
                        $scope.lastname = '';
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
(function () {
    'use strict';

    angular
            .module('routerApp')
            .controller('register', register);

    function register($scope, $http, $location, $localStorage, $state, $q, requestdata, timeStorage) {

        $scope.mustShow = false;
        $scope.register = function () {
            var registerdetail = {
                firstname: $scope.firstname,
                lastname: $scope.lastname,
                email: $scope.email,
                password: $scope.password
            };
            var promise = requestdata.callapi("register/", registerdetail);
            promise.then(
                    function (response) {
                        $scope.firstname = '';
                        $scope.lastname = '';
                        $scope.email = '';
                        $scope.password = '';
                        $scope.mustShow = true;
                        $scope.message = response.message;
                    },
                    function (errorresponse) {
                        console.log(errorresponse);
                        $scope.mustShow = true;
                        $scope.message = errorresponse.message;
                        $scope.firstname = '';
                        $scope.lastname = '';
                        $scope.email = '';
                        $scope.password = '';
                    }
            );

        }
        ;
        $scope.check = function () {

            if (timeStorage.get("username") != false && timeStorage.get("access_token") != false)
            {
                $state.go('home');
            }
        };
    }
    ;

})();
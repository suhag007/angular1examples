var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'dashboard.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'register.html'
            });



});

routerApp.controller('register', ['$scope', '$http', '$location', function ($scope, $http, $location) {

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
            }
            var responsePromise = $http(req);
            responsePromise.success(function (response) {
                console.log(response);
                $scope.firstname = '';
                $scope.lastname = '';
                $scope.email = '';
                $scope.password = '';
                $scope.mustShow = true;
                $scope.message = response.message;

            });

            responsePromise.error(function (response) {
                console.log(response.message);
                $scope.mustShow = true;
                $scope.message = response.message;
                $scope.firstname = '';
                $scope.lastname = '';
                $scope.email = '';
                $scope.password = '';

            });
        };
        $scope.check = function () {

            if (localStorage.getItem("username") !== null && localStorage.getItem('access_token') !== null)
            {
                $location.path('/home');
            }
        };
    }
]);
routerApp.controller('login', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        var login_url = "http://144.76.34.244:8080/magento/1.9/web/index.php/excellence/mobile/api/v1/customer/login/";
        $scope.mustShow = false;
        $scope.login = function () {
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
            var responsePromise = $http(req);
            responsePromise.success(function (response) {
                console.log(response);
                $scope.email = '';
                $scope.password = '';
                $scope.mustShow = true;
                $scope.message = response.message;
                localStorage.setItem("username", response.data.firstname);
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("expiry", response.data.expiry);
                $location.path('/home');

            });

            responsePromise.error(function (response) {
                console.log(response.message);
                $scope.mustShow = true;
                $scope.message = response.message;
                $scope.email = '';
                $scope.password = '';

            });
        };
        $scope.check = function () {

            if (localStorage.getItem("username") !== null && localStorage.getItem('access_token') !== null)
            {
                $location.path('/home');
            }
        };
    }
]);
routerApp.controller('home', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.check = function () {

            if (localStorage.getItem("username") === null && localStorage.getItem('access_token') === null)
            {
                $location.path('/login');
            } else {
                $scope.username = localStorage.getItem('username');
                return true;
            }

        };
        $scope.signout = function () {
            localStorage.removeItem('username');
            localStorage.removeItem('access_token');
            localStorage.removeItem('expiry');
            $location.path('/login');
        };
    }
]);
angular.module('routerApp', ["ui.router","ngStorage"])
       .config(function ($stateProvider, $urlRouterProvider) {
           $urlRouterProvider.otherwise("/login");
           $stateProvider
                   .state('login', {
                       url: "/login",
                       templateUrl: "login/login.html",
                       controller: 'login'
                   })
                   .state('register', {
                       url: "/register",
                       templateUrl: "register/register.html",
                       controller: 'register'
                   })
                   .state('home', {
                       url: "/home",
                       templateUrl: "dashboard/dashboard.html",
                       controller: 'home'
                   });
       });
       
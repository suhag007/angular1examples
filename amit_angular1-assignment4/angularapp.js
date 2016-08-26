var myapps = angular.module('myapp',[]);
myapps.controller('controller',['$scope', function($scope){
            var dataarray =[];
            dataarray.push({name:'amit',email:'amit@gmail.com',age:24});
            dataarray.push({name:'amrujith',email:'amarjith@gmail.com',age:23});
            dataarray.push({name:'sumit',email:'sumit@yahoo.com',age:24});
            dataarray.push({name:'kiran',email:'kiran@gmial.com',age:22});
            $scope.dataarray = dataarray;
}
]);
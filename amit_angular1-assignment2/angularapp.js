var myapps = angular.module('myapp',[]);
myapps.controller('controller1',['$scope','$rootScope', function($scope,$rootScope){
      $scope.update = function(){
      	$rootScope.value2 = $scope.value1;
      }
}
]);
myapps.controller('controller2',['$scope','$rootScope', function($scope,$rootScope){
         $scope.update = function(){
         	$rootScope.value1 = $scope.value2;
         }     
}
]);
var myapps = angular.module('myapp',[]);
myapps.controller('controller1',['$scope', function($scope){
      $scope.update = function(){
      	// $rootScope.value2 = $scope.value1;
      	$scope.$broadcast('broadcast_event');
      }
      $scope.$on('broadcast_event', function(event){
         $scope.value2 = $scope.value1;
      })
}
]);
myapps.controller('controller2',['$scope', function($scope){
         
         $scope.update = function(){
         	$scope.$emit('emit_event');
         }     
         $scope.$on('emit_event',function(event){
         	$scope.value1 = $scope.value2;
         })

}
]);
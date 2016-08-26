var myapps = angular.module('myapp',[]);
myapps.controller('controller',['$scope', function($scope){ 
    $scope.changecolor = function(value){
    	if(value===true){
    		$scope.style={"color":"red"};
    	}
    	else{
    		$scope.style={"color":"blue"};
    	}
    };
}
]); 
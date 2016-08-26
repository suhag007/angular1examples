var myapps = angular.module('myapp',[]);
myapps.controller('controller',['$scope','$http', function($scope,$http){ 
	      $scope.mustShow = false;
    $scope.update = function(){
            var req = {
        	method: 'POST',
        	url: 'http://144.76.34.244:8080/magento/1.9/web/index.php/excellence/mobile/api/v1/customer/register/',
        	headers: {
        		'Content-Type':'application/json',
        		'APP_ID':'com.tethr'
        	},
        	data: {
        	   firstname : $scope.firstname,
               lastname : $scope.lastname,
               email : $scope.email,
               password : $scope.password
        	      }
            }
        var responsePromise = $http(req);
        responsePromise.success(function(response) {
           console.log(response);
                   $scope.firstname='';
                   $scope.lastname='';
                   $scope.email='';
                   $scope.password='';
                   $scope.mustShow=true;
                   $scope.message=response.message;

                 });

         responsePromise.error(function(response) {
           console.log(response.message);
               $scope.mustShow=true;
               $scope.message=response.message;
               $scope.firstname='';
               $scope.lastname='';
               $scope.email='';
               $scope.password='';
              
              });

    };
}
]); 

myapps.controller('output',['$scope','$http','$interval', function($scope,$http,$interval){ 
   $scope.leng=4;
   $scope.products;
   $scope.currentPage=0;
   $scope.pageSize=3;
	 $scope.update = function(){

      var req = {
        	method: 'POST',
        	url: 'http://144.76.34.244:8080/magento/1.9/web/index.php/excellence/mobile/api/v1/customer/alluserdata/',
        	headers: {
        		'Content-Type':'application/json',
        		'APP_ID':'com.tethr'
        	},
        }
    var responsePromise = $http(req);
        responsePromise.success(function(response) {
           // console.log(response);
           // $scope.products=response.data;
              var arr=[];
              angular.forEach(response.data,function(value){
              	console.log(value);
              	arr.push(value);
              });
               $scope.products=arr;
               $scope.leng=arr.length;
                 });
    responsePromise.error(function(response) {
           console.log(response.message);
              });
    }

    $interval( function(){ $scope.update(); }, 1000);
    $scope.orderByMe=function(x) {
      $scope.myOrderBy = x;
    }
    
    $scope.numberOfPages = function(){
      return Math.ceil($scope.leng/$scope.pageSize);
    };

    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
          }
}
]); 
myapps.filter('startFrom',function(){
  return function(input,start){
    start= +start;
    return input.slice(start);
  }
});

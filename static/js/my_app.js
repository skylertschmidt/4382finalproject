
var app = angular.module('myApp', []);

 app.controller('myController', ['$scope', '$http',
  function($scope, $http){
  $http.get('/user/profile')
    .sucsess(function(data,status,headers,config){
        $scope.user = data;
        $scope.error = "";
    }).
    error(function(data,status,headers,config){
        $scope.user = {};
        $scope.error = data;
    });
 }]);

var myApp = angular.module('testApp',['ui.router']);

myApp.controller('testController', ['$scope', function($scope) {
  $scope.name = 'jared';
  
  $scope.redirect = function(){
      $location.path( '/angularTest2.html' );
  };
}]);

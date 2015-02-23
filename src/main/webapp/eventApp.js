var myFamilyApp = angular.module("myFamilyApp", ["ui.router"]);

myFamilyApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("createEvent");

    $stateProvider
            .state('createEvent', {
                url: "/createEvent",
                templateUrl: "events.ng.html"
            })
            .state('eventResults', {
                url: "/eventResults",
                templateUrl: "eventResults.ng.html",
                controller: function ($scope) {
                	$scope.eventName = $scope.getName();
                	$scope.eventDescription = $scope.getDescription();
                	$scope.eventUrl = $scope.getUrl();
                	$scope.eventCity = $scope.getCity();
                	$scope.eventAddress1 = $scope.getAddress1();
                	$scope.eventAddress2 = $scope.getAddress2();
                	$scope.eventState = $scope.getState();
                }
            })
});

myFamilyApp.controller('eventController', ['$scope', '$state', function ($scope, $state) {
    $scope.event = {
        name: '',
        description: '',
        url: '',
        address1: '',
        address2: '',
        city: '',
        state: ''
    };

    $scope.getName = function () {
        return $scope.event.name;
    };
    
    $scope.getDescription = function (){
    	return $scope.event.description;
    }
    
    $scope.getUrl = function (){
    	return $scope.event.url;
    }
    
    $scope.getCity = function (){
    	return $scope.event.city;
    }
    
    $scope.getAddress1 = function (){
    	return $scope.event.address1;
    }
    
    $scope.getAddress2 = function (){
    	return $scope.event.address2;
    }
    
    $scope.getState = function (){
    	return $scope.event.state;
    }

    $scope.submit = function () {
        $state.go('eventResults');
    };
}]);


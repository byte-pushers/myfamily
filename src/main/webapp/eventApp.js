var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("createEvent");

	$stateProvider.state('createEvent', {
		url : "/createEvent",
		templateUrl : "events.ng.html"
	}).state('eventResults', {
		url : "/eventResults",
		templateUrl : "eventResults.ng.html",
		controller : function($scope) {
			ip = $scope.eventName = $scope.getName();
			$scope.eventDescription = $scope.getDescription();
			$scope.eventUrl = $scope.getUrl();
			$scope.eventCheckbox1 = $scope.getCheckbox1();
			$scope.eventCheckbox2 = $scope.getCheckbox2();
			$scope.eventCity = $scope.getCity();
			$scope.eventState = $scope.getState();
			$scope.eventAddress1 = $scope.getAddress1();
			$scope.eventAddress2 = $scope.getAddress2();
			$scope.eventZip = $scope.getZip();
			$scope.eventCountry = $scope.getCountry();
			$scope.eventStartMonth = $scope.getStartMonth();
			$scope.eventStartYear = $scope.getStartYear();
			$scope.eventStartDay = $scope.getStartDay();
			$scope.eventStartHour = $scope.getStartHour();
			$scope.eventStartMinute = $scope.getStartMinute();
			$scope.eventStartMeridiem = $scope.getStartMeridiem();
			$scope.eventEndMonth = $scope.getEndMonth();
			$scope.eventEndYear = $scope.getEndYear();
			$scope.eventEndDay = $scope.getEndDay();
			$scope.eventEndHour = $scope.getEndHour();
			$scope.eventEndMinute = $scope.getEndMinute();
			$scope.eventEndMeridiem = $scope.getEndMeridiem();
		}
	})
});



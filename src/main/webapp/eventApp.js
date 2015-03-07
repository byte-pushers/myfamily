var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);
var eventArray = [];

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("createEvent");

	$stateProvider.state('createEvent', {
		url : "/createEvent",
		templateUrl : "stages/events.ng.html",
		controller: 'newEventController'
	})
	.state('eventResults', {
		url : "/eventResults",
		templateUrl : "stages/eventResults.ng.html"
	})
});



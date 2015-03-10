var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.service("global", function() {
	var eventArray = [];

	var addEvent = function(newObj) {
		eventArray.push(newObj);
	}
	
	return {
		addEvent : addEvent
	}

});

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("createEvent");

	$stateProvider.state('createEvent', {
		url : "/createEvent",
		templateUrl : "stages/events.ng.html",
	}).state('eventOverview', {
		url : "/eventOverview",
		templateUrl : "stages/eventOverview.ng.html",
		controller : 'eventOverviewController'
	});
});

/*myFamilyApp.service("event", function event() {
	var event = this;

	event.eventDisplay = "null";
});*/
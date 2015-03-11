var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.service('global', function() {
	var eventArray = [];

    function addEvent(newObj) {
        eventArray.push(newObj);
    }

    function removeEvent(index) {
        eventArray.splice(index, 1);
    }

    function getEvent(index){
        return eventArray[index];
    }

    function getEventArraySize() {
        return eventArray.length;
    }

    return {
            addEvent: addEvent,
            removeEvent: removeEvent,
            getEventArraySize : getEventArraySize,
            getEvent : getEvent
    };
});

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("home");

	$stateProvider
	.state('home', {
	    url : "/home",
	    templateUrl : "stages/home.html"
	})
	.state('createEvent', {
		url : "/createEvent",
		templateUrl : "stages/events.ng.html",
		controller : 'newEventController'
	}).state('eventOverview', {
		url : "/eventOverview",
		templateUrl : "stages/eventOverview.ng.html",
		controller : 'eventOverviewController'
	});
});
var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.service('global', function() {
	var eventArray = [];
	var eventCounter = 0;

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

    function getEventCounter() {
        return eventCounter;
    }

    function setEventCounter(num) {
        eventCounter = num;
    }

    return {
            addEvent: addEvent,
            removeEvent: removeEvent,
            getEventArraySize : getEventArraySize,
            getEvent : getEvent,
            getEventCounter : getEventCounter,
            setEventCounter : setEventCounter
    };
});

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("home");

	$stateProvider
	.state('home', {
	    url : "/home",
	    templateUrl : "stages/home.html",
	    controller : 'homeController'
	})
	.state('createEvent', {
		url : "/createEvent",
		templateUrl : "stages/createEvent.ng.html",
		controller : 'createEventController'
	})

    .state('eventOverview', {
		url : "/eventOverview",
		templateUrl : "stages/eventOverview.ng.html",
		controller : 'eventOverviewController'
	})
	.state('eventOverview.modifyName', {
    		url : "/eventOverview",
    		templateUrl : "stages/eventOverview.ng.modifyName.html",
    		controller : 'eventOverviewController'
    })
    .state('eventOverview.modifyDescription', {
        url : "/eventOverview",
        templateUrl : "stages/eventOverview.ng.modifyDescription.html",
        controller : 'eventOverviewController'
     })
    .state('modifyEvent', {
            url : "/modifyEvent",
            templateUrl : "stages/modifyEvent.ng.html",
            controller : 'modifyEventController'
    });
});
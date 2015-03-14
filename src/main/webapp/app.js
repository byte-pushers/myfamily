var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

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
var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("home");

	$stateProvider
	.state('home', {
	    url : "/home",
	    templateUrl : "stages/home.ng.html",
	    controller : 'homeController'
	})
	.state('eventForm', {
		url : "/eventForm",
		templateUrl : "stages/eventForm.ng.html",
		controller : 'eventFormController'
	})
    .state('eventOverview', {
		url : "/eventOverview",
		templateUrl : "stages/eventOverview.ng.html",
		controller : 'eventOverviewController'
	})
    .state('createUser', {
        url : "/createUser",
        templateUrl : "stages/createUser.ng.html",
        controller : 'createUserController'
    })
    .state('userCreated', {
        url : "/userCreated",
        templateUrl : "stages/userCreated.ng.html",
        controller : 'createUserController'
    })
    .state('familySearch', {
        url : "/familySearch",
        templateUrl : "stages/familySearch.ng.html"
    });
});
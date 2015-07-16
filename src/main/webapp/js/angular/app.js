var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("home");

	$stateProvider
	.state('home', {
	    url : "/home",
	    templateUrl : "partials/home.ng.html",
	    controller : 'homeController'
	})
	.state('eventForm', {
		url : "/eventForm",
		templateUrl : "partials/eventForm.ng.html",
		controller : 'eventFormController'
	})
    .state('eventOverview', {
		url : "/eventOverview",
		templateUrl : "partials/eventOverview.ng.html",
		controller : 'eventOverviewController'
	})
    .state('createUser', {
        url : "/createUser",
        templateUrl : "partials/createUser.ng.html",
        controller : 'createUserController'
    })
    .state('signIn', {
        url : "/signIn",
        templateUrl : "partials/signIn.ng.html"
    })
    .state('userCreated', {
        url : "/userCreated",
        templateUrl : "partials/userCreated.ng.html",
        controller : 'userCreatedController'
    })
    .state('familySearch', {
        url : "/familySearch",
        templateUrl : "partials/familySearch.ng.html"
    })
	.state('familySearch.byName', {
		url : "/byName",
		templateUrl : "partials/familySearch.byUser.ng.html",
		controller : 'familySearch.byUserController'
	})
	.state('familySearch.byLocation', {
		url : "/byLocation",
		templateUrl : "partials/familySearch.byLocation.ng.html"
	});
});
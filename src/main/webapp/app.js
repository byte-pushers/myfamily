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
	.state('familySearch', {
    	url : "/familySearch",
    	templateUrl : "stages/familySearch.ng.html"
    })
    .state('signUp', {
        url : "/signUp",
        templateUrl : "stages/signUp.ng.html"
    });
});
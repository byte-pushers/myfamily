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

myFamilyApp.RestfulClientUrlPrefixes = {
	DEV: "data",
	TEST: "",
	PROD: ""
};

myFamilyApp.restfulClientUrlPrefix = myFamilyApp.RestfulClientUrlPrefixes.DEV;

myFamilyApp.filterRestfulClientUrl = function (url, contextname) {
    var indexOfContextName, contextNameLength, start, path;
    contextname = (Object.isString(contextname) && contextname.length > 0)? contextname: "myfamily";
	if(myFamilyApp.restfulClientUrlPrefix == myFamilyApp.RestfulClientUrlPrefixes.DEV){
		var parser = document.createElement('a');
		parser.href = url;


		console.info("parser.protocol = "  + parser.protocol);
		console.info("parser.hostname = "  + parser.hostname);
		console.info("parser.port = "  + parser.port);
		console.info("parser.pathname = "  + parser.pathname);
		console.info("parser.search = "  + parser.search);
		console.info("parser.hash = "  + parser.hash);
		console.info("parser.host = "  + parser.host);
        console.info("parser.origin = "  + parser.origin);

        indexOfContextName = parser.pathname.indexOf(contextname);
        contextNameLength = contextname.length;
        start = indexOfContextName + contextNameLength + 1;
        path = myFamilyApp.restfulClientUrlPrefix  + "/" + parser.pathname.substring(start);

	}

    return path;
};
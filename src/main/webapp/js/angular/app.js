var myFamilyApp = angular.module("myFamilyApp",
    [
        "ui.router",
        "ngResource",
        "BytePushersApp.filters.messages"
    ]);

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
		data : {
			currentUser :  new UserProfile()
		},
        templateUrl : "partials/createUser.ng.html",
        controller : 'UserProfileController'
    })
    .state('signIn', {
        url : "/signIn",
        templateUrl : "partials/signIn.ng.html"
    })
    .state('userCreated', {
        url : "/userCreated",
		data : {
			currentUser :  new UserProfile()
		},
        templateUrl : "partials/userCreated.ng.html",
        controller : 'UserProfileController'
    })
    .state('familySearch', {
        url : "/familySearch",
        templateUrl : "partials/familySearch.ng.html",
		controller : 'PersonSearchController'
    })
	.state('familySearch.byName', {
		url : "/byName",
		templateUrl : "partials/familySearch.byUser.ng.html"
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

myFamilyApp.filterRestfulClientUrl = function (url, applicationContext) {
    var indexOfContextName, contextNameLength, start, path;
    applicationContext = (Object.isString(applicationContext) && applicationContext.length > 0)? applicationContext: "myfamily";
	if(myFamilyApp.restfulClientUrlPrefix == myFamilyApp.RestfulClientUrlPrefixes.DEV){
		var parser = document.createElement('a');
		parser.href = url;


		console.debug("parser.protocol = "  + parser.protocol);
		console.debug("parser.hostname = "  + parser.hostname);
		console.debug("parser.port = "  + parser.port);
		console.debug("parser.pathname = "  + parser.pathname);
		console.debug("parser.search = "  + parser.search);
		console.debug("parser.hash = "  + parser.hash);
		console.debug("parser.host = "  + parser.host);
        console.debug("parser.origin = "  + parser.origin);

        indexOfContextName = parser.pathname.indexOf(applicationContext);
        contextNameLength = applicationContext.length;
        start = indexOfContextName + contextNameLength + 1;
        path = myFamilyApp.restfulClientUrlPrefix  + "/" + parser.pathname.substring(start);

	}

    return path;
};

myFamilyApp.appendTransform = function (defaults, transform) {

    // We can't guarantee that the default transformation is an array
    defaults = angular.isArray(defaults) ? defaults : [defaults];

    // Append the new transformation to the defaults
    return defaults.concat(transform);
};
myFamilyApp.value('MessageHandler', new BytePushers.handlers.MessageHandler());
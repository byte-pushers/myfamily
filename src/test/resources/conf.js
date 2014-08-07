var basePath = "../../";

exports.config = {	
		
	allScriptsTimeout : 99999,

	seleniumAddress : 'http://localhost:4444/wd/hub',

	capabilities : {
		'browserName' : 'chrome'
	},

	baseUrl : 'http://localhost:9000/',

	framework : 'jasmine',

	specs : [
	     basePath + 'main/web-app/js/modifiedUpcomingEvents.js',    
         basePath + 'test/unit/jasmine/eventSpec.js'
    ],

	jasmineNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 30000,
		isVerbose : true,
		includeStackTrace : true
	}
};
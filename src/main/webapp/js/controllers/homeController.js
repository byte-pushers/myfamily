myFamilyApp.controller('homeController', [ '$scope', '$state', 'EventService',
	function($scope, $state, EventService) {
	    $scope.eventArray = EventService.getEventArray();
	    $scope.clearEventForm = function(){
	        EventService.setCurrentEventIndex = EventService.getEvent(EventService.getEventArray().length);
	    }
	}]);
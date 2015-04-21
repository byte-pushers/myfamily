myFamilyApp.controller('homeController', [ '$scope', '$state', 'EventService',
	function($scope, $state, EventService) {
	    $scope.eventArray = EventService.getEventArray();

	    $scope.setEvent = function(index){
	        EventService.setCurrentEventIndex(index);
	    }
	}]);
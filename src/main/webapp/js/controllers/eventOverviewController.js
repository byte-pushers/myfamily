myFamilyApp.controller('eventOverviewController', [ '$scope', '$state', 'global',
		function($scope, $state, global) {
	if(global.getEventArraySize() == 0 ){
		$scope.event = new Event();
	}else{
		 $scope.event = global.getEvent(global.getEventArraySize() - 1);
	}
}]);
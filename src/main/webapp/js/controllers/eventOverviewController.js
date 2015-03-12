myFamilyApp.controller('eventOverviewController', [ '$scope', '$state', 'global',
		function($scope, $state, global) {
	if(global.getEventArraySize() == 0 ){
		$scope.event = new Event();
	}else{
		 $scope.event = global.getEvent(global.getEventArraySize() - 1);
	}

    $scope.getRegHours = function(hour, minute){
        if(minute < 10){
            minute = "0" + minute
        }
    	if(hour > 12){
    	    return (hour - 12) + ":" + minute + "PM";
    	}else{
    	    return hour + ":" + minute + "AM";
    	}
    };
}]);
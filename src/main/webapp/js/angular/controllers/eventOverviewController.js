myFamilyApp.controller('eventOverviewController', [ '$scope', '$state', 'EventService',
		function($scope, $state, EventService) {
	initialize();

    $scope.deleteEvent = function(){
        EventService.deleteEvent(EventService.getCurrentEventIndex());
        EventService.setCurrentEventIndex(null);
    };

    $scope.setEdit = function(){
        EventService.setLoad(true);
    };

    $scope.getDate = function(date){
        if(!isNull(date)){
            return singleDigitDateObject((date.getMonth() + 1), 10) + "/" + date.getDate() + "/" + date.getFullYear();
        }
        else{
            return "Not specified";
        }
    };

    $scope.getTime = function(date){
        if(!isNull(date)){
        	if(date.getHours() > 12){
        	    return (date.getHours() - 12) + ":" + singleDigitDateObject(date.getMinutes(), 10) + "PM";
        	}else{
        	    return date.getHours() + ":" + singleDigitDateObject(date.getMinutes(), 10) + "AM";
        	}
        }
    };

    $scope.guestCan = function(checkbox){
            if(checkbox == true){
                return "can";
            }
            else{
                return "can't";
            }
    };

    function isNull(obj){
        if(obj == null){
            return true;
        }
        else{
            return false;
        }
    };

    function singleDigitDateObject(obj, num){
        if(obj < num){
            return "0" + obj;
        }
        else{
            return obj;
        }
    };

    function initialize(){
    	    if(EventService.getEventArraySize() == 0 ){
        		$scope.event = new Event();
        		$scope.attendeeArray = [];
        	}else{
        		 $scope.event = EventService.getEvent(EventService.getCurrentEventIndex());
        		 $scope.attendeeArray = $scope.event.getAttendeeArray();
        	}
    	};
}]);
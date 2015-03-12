myFamilyApp.controller('modifyEventController', [ '$scope', '$state', 'global',
	function($scope, $state, global) {
        var event = new Event();
        var attendee = new Attendee();

        $scope.eventUIObject = event.toUIObject();
        $scope.attendeeUIObject = attendee.toUIObject();
        
    }
]);
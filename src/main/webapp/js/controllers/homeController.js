myFamilyApp.controller('homeController', [ '$scope', '$state', 'global',
	function($scope, $state, global) {
        $scope.eventArray = [];
        if(global.getEventArraySize() != 0){
            for(i = 0; i < global.getEventArraySize(); i++){
                $scope.eventArray.push(global.getEvent(i));
            }
        }

        $scope.setEventCounter = function(num){
            console.log(num);
            global.setEventCounter(num);
        }
    }
]);
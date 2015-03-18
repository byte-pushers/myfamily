myFamilyApp.controller('createUserController', [ '$scope', '$state', 'EventService',
		function($scope, $state, EventService) {
        $scope.submit = function(isValid){
            if(isValid){
                $state.go('userCreated', {});
            }
        }
		}]);
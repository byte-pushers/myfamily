myFamilyApp.controller('createUserController', [ '$scope', '$state', 'EventService',
		function($scope, $state, EventService) {
		    $scope.areaCode = "";
		    $scope.prefix = "";

            $scope.submit = function(isValid){
                if(isValid){
                    $state.go('userCreated', {});
                }
            };

            $scope.autoFocus = function(string, length, id){
                if(string.length == length){
                    document.getElementById(id).focus();
                };
            };
		}]);
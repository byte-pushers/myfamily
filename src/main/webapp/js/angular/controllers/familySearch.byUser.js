myFamilyApp.controller('familySearch.byUser', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
    function($scope, $http, $state, EventService, UserProfileService) {
        $scope.resultsArray = [];
        $scope.search = "";

        scope.submit = function(isValid){
            if(isValid){
                //do action
            }
        }
    }
]);
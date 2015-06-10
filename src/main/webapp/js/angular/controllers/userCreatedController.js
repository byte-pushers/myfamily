myFamilyApp.controller('userCreatedController', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
    function($scope, $http, $state, EventService, UserProfileService) {

        initialize();

        function initialize(){
            if(UserProfileService.getCurrentUser() != null){
                $scope.user = UserProfileService.getCurrentUser();
            }
            else{
                $scope.user = null;
            }
        }
    }
]);
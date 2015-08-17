myFamilyApp.controller('UserProfileController',
    [ '$scope', '$state', 'UserProfileService', 'MessageHandler',
    function($scope, $rootScope, $state, UserProfileService, MessageHandler) {

        $scope.submit = function(isValid){
            var requestParameters = {payload: new UserProfile($scope.userProfileUIObject)};
            if(isValid){
                UserProfileService.create(requestParameters).then(function(userProfile){
                    $scope.userProfileUIObject = userProfile.toUIObject();
                    $state.go('userCreated', {});
                }, function(webServiceException) {
                    $scope.getMessageHandler.addMessages(webServiceException.getExceptionMessages());
                });
            }
        };

        $scope.createUserTest = function(isValid){
            var requestParams = {payload: new UserProfile($scope.userProfileUIObject)};

            UserProfileService.create(requestParams).then(function(userProfile){
                $scope.setUserProfileUIObject(userProfile.toUIObject());
                $state.go('userCreated');
            }, function(webServiceException) {
                $rootScope.messageHandler.addMessages(webServiceException.getExceptionMessages());
            });
        };

        $scope.autoFocus = function(string, length, id){
            try {
                if (string.length == length) {
                    document.getElementById(id).focus();
                }
            } catch(e){

            }
        };
    }
]);
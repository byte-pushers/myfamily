myFamilyApp.controller('UserProfileController',
    [ '$scope', '$rootScope', '$http', '$state', 'EventService', 'UserProfileService', 'MessageHandler',
    function($scope, $rootScope, $http, $state, EventService, UserProfileService, MessageHandler) {
        $scope.personUIObject = new Person().toUIObject();
        $scope.personUIObject.emails.push(new Email().toUIObject());
        $scope.personUIObject.phoneNumbers.push(new PhoneNumber().toUIObject());
        $scope.personUIObject.addresses.push(new Address().toUIObject());
        $scope.personUIObject.gender = null;
        $scope.areaCode = "";
        $scope.exchangeCode = "";
        $scope.errors = [];
        $scope.userProfileUIObject = new UserProfile().toUIObject();
        $rootScope.messageHandler = MessageHandler;

        $rootScope.addMessage = function(message) {
            if(Object.isDefined(message)) {
                $rootScope.messageHandler.addMessage(message);
            }
        };

        /**
         * Adds a message which will stay around for the next state.
         * Needed if you want to:
         *  - pass a message to another state because the action both makes a change and also transitions state
         *  - you want to set a message when a controller is being initialized
         */
        $rootScope.addInterstateMessage = function(message) {
            if(Object.isDefined(message)) {
                $rootScope.messageHandler.addMessage(message, null, 1);
            }
        };

        $rootScope.createSuccessDeleteMessage = function(message) {
            var msg = BytePushers.models.Message.SUCCESS_DELETE_MSG;
            if(Object.isDefined(message)){
                if(Object.isDefined(message.getValue)){
                    msg = message.getValue();
                }
                else{ msg = message; }
            }

            return new BytePushers.models.Message({type: BytePushers.models.Message.SUCCESSFUL_DELETE, value: msg});
        };

        $rootScope.createSuccessSaveMessage = function (message) {
            var msg = BytePushers.models.Message.SUCCESS_SAVE_MSG;
            if(Object.isDefined(message)){
                if(Object.isDefined(message.getValue)){
                    msg = message.getValue();
                }
                else{ msg = message; }
            }

            return new BytePushers.models.Message({type: BytePushers.models.Message.SUCCESSFUL_SAVE, value: msg});
        };

        $rootScope.createErrorMessage = function (message) {
            var msg = BytePushers.models.Message.ERROR_MSG;
            if(Object.isDefined(message)){
                if(Object.isDefined(message.getValue)){
                    msg = message.getValue();
                }
                else{ msg = message; }
            }

            return new BytePushers.models.Message({type: BytePushers.models.Message.ERROR, value: msg})
        };


        $scope.submit = function(isValid){
            console.log($scope.personUIObject.privacy);
            if(isValid){
                resetErrors();
                UserProfileService.createUser($scope.personUIObject, isValid);
                setErrors();
            }
        };

        $scope.createUserTest = function(isValid){
            var requestParams = {payload: new UserProfile($scope.userProfileUIObject)};

            UserProfileService.create(requestParams).then(function(userProfile){
                $scope.userProfile = userProfile;
                $scope.userProfileUIObject = userProfile.toUIObject();
                $state.go('userCreated', {});
            }, function(webServiceException) {
                $rootScope.messageHandler.addMessages(webServiceException.getExceptionMessages());
            });

            setErrors();
        };

        function setErrors(){
            $scope.errors = UserProfileService.getErrorList();
        }

        function resetErrors(){
            $scope.errors = [];
            UserProfileService.resetErrorList();
        }

        $scope.autoFocus = function(string, length, id){
            try {
                if (string.length == length) {
                    document.getElementById(id).focus();
                }
            }
            catch(e){}
        };
    }
]);
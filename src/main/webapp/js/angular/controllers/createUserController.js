myFamilyApp.controller('createUserController', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
    function($scope, $http, $state, EventService, UserProfileService) {
        $scope.personUIObject = new Person().toUIObject();
        $scope.personUIObject.emails.push(new Email().toUIObject());
        $scope.personUIObject.phoneNumbers.push(new PhoneNumber().toUIObject());
        $scope.personUIObject.addresses.push(new Address().toUIObject());
        $scope.personUIObject.gender = null;
        $scope.areaCode = "";
        $scope.exchangeCode = "";
        $scope.errors = [];

        $scope.submit = function(isValid){
            console.log($scope.personUIObject.privacy);
            if(isValid){
                resetErrors();
                UserProfileService.createUser($scope.personUIObject, isValid);
                setErrors();
            }
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
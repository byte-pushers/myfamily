myFamilyApp.controller('createUserController', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
    function($scope, $http, $state, EventService, UserProfileService) {
        $scope.personUIObject = new Person().toUIObject();
        //$scope.personUIObject.phoneNumbers = [];
        $scope.personUIObject.phoneNumbers.push(new PhoneNumber().toUIObject());
        //$scope.personUIObject.addresses = [];
        $scope.personUIObject.addresses.push(new Address().toUIObject());
        $scope.personUIObject.passwordConfirm = null;
        $scope.areaCode = "";
        $scope.exchangeCode = "";

        $scope.submit = function(isValid){
            if(isValid){
                UserProfileService.createUser($scope.personUIObject, isValid);
                //reset();
            }
        };

        function reset(){
            //document.getElementById("createUserForm").reset();
            $scope.personUIObject.phoneNumbers = [];
            $scope.personUIObject.addresses = [];
        };

        $scope.autoFocus = function(string, length, id){
            if(string.length == length){
                document.getElementById(id).focus();
            };
        };
    }
]);
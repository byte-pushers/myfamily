myFamilyApp.controller('createUserController', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
		function($scope, $http, $state, EventService, UserProfileService) {
		    $scope.personUIObject = new Person().toUIObject();
		    $scope.personUIObject.phoneNumbers = [];
		    $scope.personUIObject.phoneNumbers.push(new PhoneNumber());
		    $scope.personUIObject.addresses = [];
		    $scope.personUIObject.addresses.push(new Address());
		    $scope.areaCode = "";
		    $scope.exchangeCode = "";

		    //TODO refactor createUser.ng.html to use the personUIObject.address and personUIObject.phones in it's angular bindings

            $scope.submit = function(isValid){
                if(isValid){
                    $http.post("http://localhost:8080/person-profile-ws/user-profile/newUser.json", new Person($scope.personUIObject).toJSON())
                        .success(function (data) {
                            reset();
                            $state.go('userCreated', {});
                        })
                        .error(function(data) {
                            alert("The request failed");
                        })
                }
            };

            function reset(){
                $scope.personUIObject.phoneNumbers = [];
                $scope.personUIObject.addresses = [];
            };

            $scope.autoFocus = function(string, length, id){
                if(string.length == length){
                    document.getElementById(id).focus();
                };
            };
		}]);
myFamilyApp.controller('createUserController', [ '$scope', '$http', '$state', 'EventService', 'UserProfileService',
		function($scope, $http, $state, EventService, UserProfileService) {
		    var person = new Person();
		    var phoneNumber = new PhoneNumber();
		    var address = new Address();

		    $scope.personUIObject = person.toUIObject();
		    $scope.personUIObject.phoneNumbers = [];
		    $scope.personUIObject.phoneNumbers.push(phoneNumber);
		    $scope.personUIObject.addresses = [];
		    $scope.personUIObject.addresses.push(address);
		    $scope.areaCode = "";
		    $scope.exchangeCode = "";

		    //TODO refactor createUser.ng.html to use the personUIObject.address and personUIObject.phones in it's angular bindings

            $scope.submit = function(isValid){
                if(isValid){
                    console.log($scope.personUIObject.phoneNumbers[0]);
                    console.log($scope.personUIObject.phoneNumbers.length);
                    console.log($scope.personUIObject.addresses[0]);

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
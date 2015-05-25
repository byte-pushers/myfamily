myFamilyApp.service('UserProfileService', ['$http', '$state', function($http, $state) {
	var currentUser = null;

    function createUser(userJsonObject, isValid){
        userJsonObject.phoneNumbers[0].country = userJsonObject.addresses[0].country;

        if(isValid){
            $http.post("http://localhost:8080/person-profile-ws/user-profile/newUser.json", userJsonObject)
                .success(function (data) {
                    $state.go('userCreated', {});
                })
                .error(function(data) {
                    alert("The request failed: " + data);
                })
        }
    }

    function getCurrentUser(){
        return currentUser;
    }

    function setCurrentUser(input) {
        currentUser = input;
    }

    return {
        getCurrentUser : getCurrentUser,
        setCurrentUser: setCurrentUser,
        createUser: createUser
    };
}]);
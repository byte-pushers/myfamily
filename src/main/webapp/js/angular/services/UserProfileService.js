myFamilyApp.service('UserProfileService', ['$http', '$state', function($http, $state) {
	var currentUser = null;

    function createUser(userJsonObject, isValid){
        var jsonObject = createNewJsonObject(userJsonObject)
        format();

        if(isValid){
            $http.post("http://localhost:8080/user-profile-ws/profiles/user.json", jsonObject)
                .success(function (data) {
                    setCurrentUser(new Person(data));
                    $state.go('userCreated', {});
                })
                .error(function(data) {
                    alert("The request failed: " + data);
                })
        }

        function format(){
            jsonObject.phoneNumbers[0].country = "UNITED_STATES";
            jsonObject.birthDate = formatDateJSon(jsonObject.birthDate);
            console.log(jsonObject);
        }

        function createNewJsonObject(UIObj){
            var obj = new Person().toUIObject();

            obj.firstName = UIObj.firstName;
            obj.middleName = UIObj.middleName;
            obj.lastName = UIObj.lastName;
            obj.email = UIObj.email;
            obj.birthDate = UIObj.birthDate;
            obj.phoneNumbers = UIObj.phoneNumbers;
            obj.addresses = UIObj.addresses;
            obj.gender = UIObj.gender;
            obj.username = UIObj.username;
            obj.password = UIObj.password;

            return obj;
        }
    }

    function formatDateJSon(date){
        return [date.getFullYear(), (date.getMonth() + 1), date.getDate() ];
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
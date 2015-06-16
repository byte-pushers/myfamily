myFamilyApp.service('UserProfileService', ['$http', '$state', function($http, $state) {
	var currentUser = null;
    var errorList = [];

    function getCurrentUser(){
        return currentUser;
    }

    function setCurrentUser(input) {
        currentUser = input;
    }

    function getErrorList(){
        return errorList;
    }

    function resetErrorList(){
        errorList = [];
    }

    function createUser(userJsonObject, isValid){
        var jsonObject = createNewJsonObject(userJsonObject)
        configureVariables(jsonObject);

        if(isValid){
            $http.post("http://localhost:8080/user-profile-ws/profiles/user.json", jsonObject)
                .success(function (data) {
                    var response = new WebServiceResponse(data);
                    errorList = [];
                    setCurrentUser(response.getPayload().getPerson());
                    $state.go('userCreated', {});
                })
                .error(function(data) {
                    var response = new WebServiceResponse(data);
                    errorList.push(response.getStatus().getMessages());
                })
        }

        function configureVariables(UIObj){
            UIObj.phoneNumbers[0].country = UIObj.addresses[0].country;

            UIObj.birthDate = formatDateAsLocalDateJSON(UIObj.birthDate);

            UIObj.createdDate = new Date().toJSON();
            UIObj.lastModifiedDate = UIObj.createdDate;
            UIObj.createdBy = UIObj.firstName + " " + UIObj.lastName;
            UIObj.lastModifiedBy = UIObj.createdBy;

            UIObj.phoneNumbers[0].createdDate = new Date().toJSON();
            UIObj.phoneNumbers[0].lastModifiedDate = UIObj.phoneNumbers[0].createdDate;
            UIObj.phoneNumbers[0].createdBy = UIObj.firstName + " " + UIObj.lastName;
            UIObj.phoneNumbers[0].lastModifiedBy = UIObj.phoneNumbers[0].createdBy;

            UIObj.addresses[0].createdDate = new Date().toJSON();
            UIObj.addresses[0].lastModifiedDate = UIObj.addresses[0].createdDate;
            UIObj.addresses[0].createdBy = UIObj.firstName + " " + UIObj.lastName;
            UIObj.addresses[0].lastModifiedBy = UIObj.addresses[0].createdBy;

        }

        function createNewJsonObject(UIObj){
            var obj = new Person().toUIObject();

            obj.id = UIObj.id;
            obj.createdDate = UIObj.createdDate;
            obj.lastModifiedDate = UIObj.lastModifiedDate;
            obj.createdBy = UIObj.createdBy;
            obj.lastModifiedBy = UIObj.lastModifiedBy;
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

        function formatDateAsLocalDateJSON(date){
            return [date.getFullYear(), (date.getMonth() + 1), date.getDate() ];
        }
    }

    return {
        getCurrentUser : getCurrentUser,
        setCurrentUser: setCurrentUser,
        getErrorList: getErrorList,
        resetErrorList: resetErrorList,
        createUser: createUser
    };
}]);
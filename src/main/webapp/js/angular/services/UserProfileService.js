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


    function createUserProfile(userProfile){
        $http.post(myFamilyApp.filterRestfulClientUrl("http://localhost:8080/user-profile-ws/profiles/user.json", "user-profile-ws"), userProfile.toJSON())
            .success(function (jsonResponse) {
                var response = BytePushers.models.ResponseTransformer.transformJSONResponse(jsonResponse, BytePushers.models.UserProfileTransformer);
                errorList = [];
                setCurrentUser(response.getPayload().getPerson().toUIObject());
                $state.go('userCreated', {});
            })
            .error(function(data) {
                var response = new WebServiceResponse(data);
                errorList.push(response.getRequestStatus().getMessages());
            });
    }

    function createUser(userJsonObject, isValid){
        var jsonObject = createNewJsonObject(userJsonObject);
        configureVariables(jsonObject);

        if(isValid){
            $http.post(myFamilyApp.filterRestfulClientUrl("http://localhost:8080/user-profile-ws/profiles/user.json", "user-profile-ws"), jsonObject)
                .success(function (jsonResponse) {
                    var response = BytePushers.models.ResponseTransformer.transformJSONResponse(jsonResponse, BytePushers.models.PersonTransformer);
                    errorList = [];
                    setCurrentUser(response.getPayload());
                    $state.go('userCreated', {});
                })
                .error(function(data) {
                    var response = new WebServiceResponse(data);
                    errorList.push(response.getRequestStatus().getMessages());
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
            obj.emails = UIObj.emails;
            obj.birthDate = UIObj.birthDate;
            obj.privacy = UIObj.privacy;
            obj.phoneNumbers = UIObj.phoneNumbers;
            obj.addresses = UIObj.addresses;
            obj.gender = UIObj.gender;
            obj.username = UIObj.username;
            obj.password = UIObj.password;

            return obj;
        }

        function formatDateAsLocalDateJSON(someDate){
            var localDateJSON = [];
            if(Object.isDate(someDate)){
                localDateJSON = [date.getFullYear(), (date.getMonth() + 1), date.getDate() ];
            }
            return localDateJSON;
        }
    }

    return {
        getCurrentUser : getCurrentUser,
        setCurrentUser: setCurrentUser,
        getErrorList: getErrorList,
        resetErrorList: resetErrorList,
        createUser: createUser,
        createUserProfile: createUserProfile
    };
}]);
myFamilyApp.service('SearchService', ['$http', '$state', function($http, $state) {
    var errorList = [];
    var resultsList = [];

    function searchByName(firstName, middleName, lastName){
        var input = [firstName, middleName, lastName];
        $http.post("http://localhost:8080/user-profile-ws/search/byName.json", input)
            .success(function (data) {
                var response = new WebServiceResponse(data);
                errorList = [];
                resultsList = response.getPayload();
            })
            .error(function(data) {
                var response = new WebServiceResponse(data);
                errorList.push(response.getRequestStatus().getMessages());
            })
    }

    function searchByUsername(username){
        $http.post("http://localhost:8080/user-profile-ws/search/byUsername.json", username)
            .success(function (data) {
                var response = new WebServiceResponse(data);
                errorList = [];
                resultsList = response.getPayload();
            })
            .error(function(data) {
                var response = new WebServiceResponse(data);
                errorList.push(response.getRequestStatus().getMessages());
            })
    }

    function searchByLocation(){

    }

    function getMiddleName(array){
        var string;

        if(array.length > 1){
            for(var i = 1; i < array.length -2; i++){
                string += array[i];
            }
        }
    }

    function getResultsList(){
        return resultsList;
    }

    function resetResultsList(){
        resultsList = [];
    }

    function getErrorList(){
        return errorList;
    }

    function resetErrorList(){
        errorList = [];
    }

    return {
        searchByName : searchByName,
        searchByUsername: searchByUsername,
        searchByLocation: searchByLocation,
        getResultsList: getResultsList,
        resetResultsList: resetResultsList,
        getErrorList: getErrorList,
        resetErrorList: resetErrorList
    };
}]);
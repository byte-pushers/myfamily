myFamilyApp.controller('familySearch.byUserController', [ '$scope', '$http', '$state', 'SearchService',
    function($scope, $http, $state, SearchService) {
        $scope.searchRequest = new SearchRequest().toUIObject();
        $scope.validNameForm = true;
        $scope.validUsernameForm = true;
        $scope.resultsArray = [];

        $scope.submit = function(isValid, isNameField){
            if(isNameField){
                $scope.validNameForm = isValid;
            } else {
                $scope.validUsernameForm = isValid;
            }

            if(isValid){
                if(isNameField){
                    SearchService.searchByName($scope.searchRequest.firstName, $scope.searchRequest.middleName, $scope.searchRequest.lastName);
                } else {
                    SearchService.searchByUsername($scope.searchRequest.username);
                }
            }
        }
    }
]);
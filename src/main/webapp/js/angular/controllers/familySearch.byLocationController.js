myFamilyApp.controller('familySearch.byLocationController', [ '$scope', '$http', '$state', 'SearchService',
    function($scope, $http, $state, SearchService) {
        $scope.searchRequest = new SearchRequest.toJSON();
        $scope.searchRequest.address = new Address().toJSON();
        $scope.resultsArray = [];


        $scope.submit = function(isValid){
            if(isValid){

            }
        }

    }
]);
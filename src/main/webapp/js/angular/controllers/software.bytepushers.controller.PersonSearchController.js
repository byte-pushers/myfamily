myFamilyApp.controller('PersonSearchController',
    [ '$scope', '$state', 'PersonSearchService',
        function($scope,  $state, PersonSearchService) {
            $scope.personSearchCriteria = {
                firstName: null,
                middleName: null,
                lastName: null,
                address: {
                    street1: null,
                    street2: null,
                    city: null,
                    state: null,
                    zip: null,
                    country: null
                }
            };
            $scope.submit = function(isValid){
                var requestParameters = {payload: new PersonSearchService($scope.personSearchUIObject)};
                if(isValid){
                   PersonSearchService.create(requestParameters).then(function(personSearch){
                        $scope.personSearchUIObject = personSearch.toUIObject();
                        $state.go('userCreated', {});
                    }, function(webServiceException) {
                        //$scope.getMessageHandler().addMessages(webServiceException.getExceptionMessages());
                    });
                }
            };

            $scope.doTestSearch = function(personSearchCriteria){
                var requestParams = {payload: personSearchCriteria};

                PersonSearchService.search(requestParams).then(function(persons){
                    console.log("persons: " + persons);
                    //$scope.setPersonSearchUIObject(personSearch.toUIObject());
                    //$state.go('userCreated');
                }, function(webServiceException) {
                    //$scope.getMessageHandler().addMessages(webServiceException.getExceptionMessages());
                });
            };

            $scope.autoFocus = function(string, length, id){
                try {
                    if (string.length == length) {
                        document.getElementById(id).focus();
                    }
                } catch(e){

                }
            };
        }
    ]);/**
 * Created by pouncilm on 11/28/15.
 */

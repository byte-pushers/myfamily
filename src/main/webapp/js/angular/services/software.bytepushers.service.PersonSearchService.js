myFamilyApp.service('PersonSearchService', ['$http', '$q', '$resource', function($http, $q, $resource) {
    var search = function(createPersonSearchRequestParameters) {
        var deferred = $q.defer(),
            url = myFamilyApp.filterRestfulClientUrl("http://localhost:8080/user-profile-ws/persons.json", "user-profile-ws"),
            defaultParams = {},
            actions = {
                save: {
                    method: "GET",
                    isArray: false,
                    transformResponse: myFamilyApp.appendTransform($http.defaults.transformResponse, function (jsonResponse) {
                        var response = BytePushers.models.ResponseTransformer.transformJSONResponse(jsonResponse, BytePushers.models.PersonsTransformer);

                        if(!response.isSuccessful()){
                            throw new BytePushers.exceptions.WebServiceException({exceptionMessages: response.getMessages()});
                        }
                        return response;
                    })
                }
            },
            options = {stripTrailingSlashes: true},
            service = $resource(url, defaultParams, actions, options);

        service.save(createPersonSearchRequestParameters.payload, function(response) {
            deferred.resolve(response.getPayload());
        }, function(webServiceException){
            deferred.reject(webServiceException);
        });

        return deferred.promise;
    };

    return {
        search: search
    };
}]);
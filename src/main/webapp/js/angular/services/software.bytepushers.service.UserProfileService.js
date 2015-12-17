myFamilyApp.service('UserProfileService', ['$http', '$q', '$resource', function($http, $q, $resource) {
    var create = function(createUserProfileRequestParameters) {
        var deferred = $q.defer(),
            /*url = myFamilyApp.filterRestfulClientUrl("http://localhost:8080/user-profile-ws/profiles/users.json", "user-profile-ws"),*/
            url = "http://localhost:8080/user-profile-ws/users.json",
            defaultParams = {},
            actions = {
                save: {
                    method: "POST",
                    isArray: false,
                    headers:{'Content-Type':'application/json'},
                    transformResponse: myFamilyApp.appendTransform($http.defaults.transformResponse, function (jsonResponse) {
                        var response = BytePushers.models.ResponseTransformer.transformJSONResponse(jsonResponse, BytePushers.models.UserProfileTransformer);

                        if(!response.isSuccessful()){
                           throw new BytePushers.exceptions.WebServiceException({exceptionMessages: response.getMessages()});
                        }
                        return response;
                    })
                }
            },

            /*
             * issues with date format being sent to service
             */

            options = {stripTrailingSlashes: true},
            service = $resource(url, defaultParams, actions, options);

        service.save(createUserProfileRequestParameters.payload.toJSON(), function(response) {
            deferred.resolve(response.getPayload());
        }, function(webServiceException){
            deferred.reject(webServiceException);
        });

        return deferred.promise;
    };

    return {
        create: create
    };
}]);
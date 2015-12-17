myFamilyApp.controller('UserProfileController',
    [ '$scope', '$state', 'UserProfileService',
    function($scope,  $state, UserProfileService) {

        $scope.submit = function(isValid){
            var requestParameters = {payload: new UserProfile($scope.userProfileUIObject)};
            if(isValid){
                UserProfileService.create(requestParameters).then(function(userProfile){
                    $scope.userProfileUIObject = userProfile.toUIObject();
                    $state.go('userCreated', {});
                }, function(webServiceException) {
                    $scope.getMessageHandler().addMessages(webServiceException.getExceptionMessages());
                });
            }
        };

        $scope.autoFocus = function(string, length, id){
            try {
                if (string.length == length) {
                    document.getElementById(id).focus();
                }
            } catch(e){

            }
        };

        $scope.createUserTest = function(isValid){
            var user = new UserProfile(getMockUser());

            console.log(user.toJSON());

            var requestParameters = {payload: user};

            //creating user in db successful, if wrong data is sent it converts the message correctly
            //next: work on formatting the success page

            UserProfileService.create(requestParameters).then(function(userProfile){
                $scope.setUserProfileUIObject(userProfile.toUIObject());
                $state.go('userCreated');
            }, function(webServiceException) {
                console.log(webServiceException);
                $scope.getMessageHandler().addMessages(webServiceException.getExceptionMessages());
            });
        };

        function getMockUser() {
            return {"id":0,"username":"jaredramirez","password":"135132413","isAttendee":false,"person":{"id":0,"firstName":"Jared","middleName":null,"lastName":"Ramirez","emails":[{"id":0,"contactType":"PRIMARY","emailAddress":"jaredramirez@me.com","createdDate":1450045104519,"lastModifiedDate":null,"createdBy":"jared","lastModifiedBy":"jared"}],"birthDate":[1997,3,30],"phoneNumbers":[{"id":null,"contactType":"PRIMARY","country":"CANADA","areaCode":"940","exchangeCode":"368","localNumber":"7410","createdDate":"2015-10-1 3:00 PM GMT+1:00","lastModifiedDate":"2015-10-1 3:00 PM GMT+1:00","createdBy":"jared","lastModifiedBy":"jared"}],"addresses":[{"id":null,"contactType":"PRIMARY","street1":"1004WestOak","street2":null,"city":"Denton","state":"TEXAS","zip":"76201","country":"CANADA","createdDate":"2015-10-1 3:00 PM GMT+1:00","lastModifiedDate":"2015-10-1 3:00 PM GMT+1:00","createdBy":"jared","lastModifiedBy":"jared"}],"gender":"MALE","createdDate":"2015-10-1 3:00 PM GMT+1:00","lastModifiedDate":"2015-10-1 3:00 PM GMT+1:00","createdBy":"jared","lastModifiedBy":"jared"},"createdDate":"2015-10-1 3:00 PM GMT+1:00","lastModifiedDate":"2015-10-1 3:00 PM GMT+1:00","createdBy":"jared","lastModifiedBy":"jared"};
        }
    }
]);
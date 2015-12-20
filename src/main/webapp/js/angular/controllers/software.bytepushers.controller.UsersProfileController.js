myFamilyApp.controller('UserProfileController',
    function($scope,  $state, UserProfileService) {

        $scope.submit = function(isValid){
            configureBirthDate();

            var user = new UserProfile($scope.userProfileUIObject);
            console.log("user: " + user.toJSON());
            var requestParameters = {payload: user};

            //mock data working & sending full request, real data not working

            if(isValid) {
                UserProfileService.create(requestParameters).then(function (userProfile) {
                    $scope.setUserProfileUIObject(userProfile.toUIObject());
                    $state.go('userCreated');
                }, function (webServiceException) {
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

        function configureBirthDate(){
            $scope.userProfileUIObject.person.birthDate = [$scope.rawBirthDate.getFullYear(), ($scope.rawBirthDate.getMonth() + 1) , $scope.rawBirthDate.getDate()];
        }

        $scope.createUserTest = function(isValid){
            var requestParameters = {payload: new UserProfile(getMockUser())};

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
    },
    [ '$scope', '$state', 'UserProfileService'
]);
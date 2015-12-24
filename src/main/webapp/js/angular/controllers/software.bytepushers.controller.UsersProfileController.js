myFamilyApp.controller('UserProfileController', [ '$scope', '$state', 'UserProfileService',
    function($scope,  $state, UserProfileService) {

        $scope.submit = function(isValid){
            /*
            * non-structural bugs:
            *    date sent to server not current date
             */

            configureUser();
            console.log($scope.userProfileUIObject.person.birthDate);

            var user = new UserProfile($scope.getUserProfileUIObject());
            var requestParameters = {payload: user};

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

        function configureUser(){
            $scope.userProfileUIObject.id = 0;
            $scope.userProfileUIObject.createdBy = "userprofile";
            $scope.userProfileUIObject.lastModifiedBy = "userprofile";
            $scope.userProfileUIObject.createdDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.lastModifiedDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.id = 0;
            $scope.userProfileUIObject.person.createdBy = "userprofile";
            $scope.userProfileUIObject.person.lastModifiedBy = "userprofile";
            $scope.userProfileUIObject.person.createdDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.lastModifiedDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.emails[0].id = 0;
            $scope.userProfileUIObject.person.emails[0].contactType = "PRIMARY";
            $scope.userProfileUIObject.person.emails[0].accessLevel = "PUBLIC";
            $scope.userProfileUIObject.person.emails[0].createdBy = "userprofile";
            $scope.userProfileUIObject.person.emails[0].lastModifiedBy = "userprofile";
            $scope.userProfileUIObject.person.emails[0].createdDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.emails[0].lastModifiedDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.phoneNumbers[0].id = 0;
            $scope.userProfileUIObject.person.phoneNumbers[0].contactType = "PRIMARY";
            $scope.userProfileUIObject.person.phoneNumbers[0].country = $scope.userProfileUIObject.person.addresses[0].country;
            $scope.userProfileUIObject.person.phoneNumbers[0].createdBy = "userprofile";
            $scope.userProfileUIObject.person.phoneNumbers[0].lastModifiedBy = "userprofile";
            $scope.userProfileUIObject.person.phoneNumbers[0].createdDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.phoneNumbers[0].lastModifiedDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.addresses[0].id = 0;
            $scope.userProfileUIObject.person.addresses[0].contactType = "PRIMARY";
            $scope.userProfileUIObject.person.addresses[0].createdBy = "userprofile";
            $scope.userProfileUIObject.person.addresses[0].lastModifiedBy = "userprofile";
            $scope.userProfileUIObject.person.addresses[0].createdDate = new Date().getTime() / 1000;
            $scope.userProfileUIObject.person.addresses[0].lastModifiedDate = new Date().getTime() / 1000;

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
            return {"id":0,"username":"jaredramirez","password":"135132413","isAttendee":false,"person":{"id":0,"firstName":"Jared","middleName":null,"lastName":"Ramirez","emails":[{"id":0,"contactType":"PRIMARY","emailAddress":"jaredramirez@me.com","createdDate":1450045104519,"lastModifiedDate":1450045104519,"createdBy":"jared","lastModifiedBy":"jared"}],"birthDate":[1997,3,30],"phoneNumbers":[{"id":0,"contactType":"PRIMARY","country":"CANADA","areaCode":"940","exchangeCode":"368","localNumber":"7410","createdDate":1450045104519,"lastModifiedDate":1450045104519,"createdBy":"jared","lastModifiedBy":"jared"}],"addresses":[{"id":0,"contactType":"PRIMARY","street1":"1004WestOak","street2":null,"city":"Denton","state":"TEXAS","zip":"76201","country":"CANADA","createdDate":1450045104519,"lastModifiedDate":1450045104519,"createdBy":"jared","lastModifiedBy":"jared"}],"gender":"MALE","createdDate":1450045104519,"lastModifiedDate":1450045104519,"createdBy":"jared","lastModifiedBy":"jared"},"createdDate":1450045104519,"lastModifiedDate":1450045104519,"createdBy":"jared","lastModifiedBy":"jared"};
        }
    }
]);
/**
 * Created by pouncilm on 8/11/15.
 */
myFamilyApp.controller('MyFamilyController', [ '$scope', function($scope) {
    $scope.userProfileUIObject = new UserProfile().toUIObject();

    $scope.getUserProfileUIObject = function() {
        return $scope.userProfileUIObject;
    };

    $scope.setUserProfileUIObject = function(userProfileUIObject){
        $scope.userProfileUIObject = userProfileUIObject;
    };


}]);
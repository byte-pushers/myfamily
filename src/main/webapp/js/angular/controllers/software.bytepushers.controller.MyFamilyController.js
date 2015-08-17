/**
 * Created by pouncilm on 8/11/15.
 */
myFamilyApp.controller('MyFamilyController', 'messageHandler', [ '$scope', function($scope) {
    $scope.userProfileUIObject = new UserOrofile().toUIObject();

    $scope.getUserProfileUIObject = function() {
        return $scope.userProfileUIObject;
    };

    $scope.setUserProfileUIObject = function(userProfileUIObject){
        $scope.userProfileUIObject = userProfileUIObject;
    };

    $scope.getMessageHandler = function(){
        return $scope.MessageHandler;
    };

    $scope.setMessageHandler = function(){
        return $scope.setMessageHandler();
    }



}]);
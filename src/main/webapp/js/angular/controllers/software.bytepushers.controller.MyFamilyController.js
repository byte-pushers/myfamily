/**
 * Created by pouncilm on 8/11/15.
 */
myFamilyApp.controller('MyFamilyController', [ '$scope', function($scope) {
    $scope.messageHandler = messageHandler;

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
/**
 * Created by pouncilm on 8/11/15.
 */
myFamilyApp.controller('MyFamilyController', [ '$scope', 'MessageHandler', function($scope, MessageHandler) {
    $scope.userProfileUIObject = new UserProfile().toUIObject();
    $scope.messageHandler = MessageHandler;

    $scope.getUserProfileUIObject = function() {
        return $scope.userProfileUIObject;
    };

    $scope.setUserProfileUIObject = function(userProfileUIObject){
        $scope.userProfileUIObject = userProfileUIObject;
    };

    $scope.getMessageHandler = function(){
        return $scope.messageHandler;
    };

    $scope.setMessageHandler = function(messageHandler){
        $scope.messageHandler = messageHandler;
    }
}]);
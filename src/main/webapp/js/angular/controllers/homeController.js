myFamilyApp.controller('homeController', [ '$scope', '$http', '$state', 'EventService',
	function($scope, $http, $state, EventService) {
	    $scope.eventArray = EventService.getEventArray();

	    $scope.setEvent = function(index){
	        EventService.setCurrentEventIndex(index);
	    }

	    /*$scope.HttpGet = function(){
            $http.get("http://localhost:8080/person-profile-ws/user-profile/getUser/0.json")
              .success(function (data) {
                $scope.results = data.firstName + " " + data.lastName + " " + data.gender;
              })
	    }

	    $scope.HttpPost = function(){
            $http.post("http://localhost:8080/person-profile-ws/user-profile/newUser.json", {"firstName": "jared", "middleName": "pascual", "lastName": "ramirez", "email": "jaredramirez@me.com", "birthDate": "2015-05-08", "phoneNumbers":[], "addresses":[], "gender": "MALE"})
              .success(function (data) {
                $scope.results2 = data.firstName + " " + data.lastName + " " + data.gender;
              })
        }*/
	}]);
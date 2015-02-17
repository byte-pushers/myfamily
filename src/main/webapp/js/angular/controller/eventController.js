angular.module('formExample', [])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);
	/*$scope.eventNameInput = "";
	$scope.descriptionInput = "";
	$scope.htmlInput = "";
	$scope.checkBox1Input = "";
	$scope.checkBox2Input = "";
	$scope.street1Input = "";
	$scope.street2Input = "";
	$scope.cityInput = "";
	$scope.statesInput = "";
	$scope.zipInput = "";
	$scope.countryInput = "";
	$scope.startMonthInput = "";
	$scope.startDayInput = "";
	$scope.startYearInput = "";
	$scope.startHourInput = "";
	$scope.startMinuteInput = "";
	$scope.startMeridiemInput = "";
	$scope.endMonthInput = "";
	$scope.endDayInput = "";
	$scope.endYearInput = "";
	$scope.endHourInput = "";
	$scope.endMinuteInput = "";
	$scope.endMeridiemInput = "";

	$scope.createEvent = function() {
		var event = new Event($scope.eventNameInput, $scope.descriptionInput,
				$scope.htmlInput, $scope.checkBox1Input, $scope.checkBox2Input,
				$scope.street1Input, $scope.street2Input, $scope.cityInput,
				$scope.statesInput, $scope.zipInput, $scope.countryInput,
				$scope.startMonthInput, $scope.startDayInput,
				$scope.startYearInput, $scope.startHourInput,
				$scope.startMinuteInput, $scope.startMeridiemInput,
				$scope.endMonthInput, $scope.endDayInput, $scope.endYearInput,
				$scope.endHourInput, $scope.endMinuteInput,
				$scope.endMeridiemInput);
	}; 
});*/
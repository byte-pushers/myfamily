myFamilyApp.controller('newEventController', [ '$scope', '$state',
		function($scope, $state) {
            var event = new Event();
            $scope.eventUIObject = event.toUIObject();
            $scope.attendeeList = [];
			

			$scope.attendee = {
				firstName : '',
				lastName : '',
				email : ''
			};
			
			$scope.error = {
				name: '',
				description: '',
				url: '',
				checkbox1 : '',
				checkbox2 : '',
				address1 : '',
				address2 : '',
				city : '',
				state : '',
				zip : '',
				country : '',
				startMonth : '',
				startDay : '',
				startYear : '',
				startHour : '',
				startMinute : '',
				startMeridiem : '',
				endMonth : '',
				endDay : '',
				endYear : '',
				endHour : '',
				endMinute : '',
				endMeridiem : ''
			};

			$scope.getName = function() {
				return $scope.eventUIObject.name;
			};

			$scope.getDescription = function() {
				return $scope.eventUIObject.description;
			};

			$scope.getUrl = function() {
				return $scope.eventUIObject.url;
			};

			$scope.getCheckbox1 = function() {
				return $scope.eventUIObject.checkbox1;
			};

			$scope.getCheckbox2 = function() {
				return $scope.eventUIObject.checkbox2;
			};

			$scope.getCity = function() {
				return $scope.eventUIObject.city;
			};

			$scope.getAddress1 = function() {
				return $scope.eventUIObject.address1;
			};

			$scope.getAddress2 = function() {
				return $scope.eventUIObject.address2;
			};

			$scope.getState = function() {
				return $scope.eventUIObject.state;
			};

			$scope.getZip = function() {
				return $scope.eventUIObject.zip;
			};

			$scope.getCountry = function() {
				return $scope.eventUIObject.country;
			};

			$scope.getStartMonth = function() {
				return $scope.eventUIObject.startMonth;
			};

			$scope.getStartDay = function() {
				return $scope.eventUIObject.startDay;
			};

			$scope.getStartYear = function() {
				return $scope.eventUIObject.startYear;
			};

			$scope.getStartHour = function() {
				return $scope.eventUIObject.startHour;
			};

			$scope.getStartMinute = function() {
				return $scope.eventUIObject.startMinute;
			};

			$scope.getStartMeridiem = function() {
				return $scope.eventUIObject.startMeridiem;
			};

			$scope.getEndMonth = function() {
				return $scope.eventUIObject.endMonth;
			};

			$scope.getEndDay = function() {
				return $scope.eventUIObject.endDay;
			};

			$scope.getEndYear = function() {
				return $scope.eventUIObject.endYear;
			};

			$scope.getEndHour = function() {
				return $scope.eventUIObject.endHour;
			};

			$scope.getEndMinute = function() {
				return $scope.eventUIObject.endMinute;
			};

			$scope.getEndMeridiem = function() {
				return $scope.eventUIObject.endMeridiem;
			};

			$scope.submit = function(isValid) {
				if(isValid){
					$state.go('eventResults');
				}
			}

		} ]);
myFamilyApp.controller('newEventController', [ '$scope', '$state',
		function($scope, $state) {
			var event = new Event();
			$scope.attendeeList = [];
			
			$scope.event = {
				name : '',
				description : '',
				url : '',
				checkbox1 : false,
				checkbox2 : false,
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
				return $scope.event.name;
			};

			$scope.getDescription = function() {
				return $scope.event.description;
			}

			$scope.getUrl = function() {
				return $scope.event.url;
			}

			$scope.getCheckbox1 = function() {
				return $scope.event.checkbox1;
			}

			$scope.getCheckbox2 = function() {
				return $scope.event.checkbox2;
			}

			$scope.getCity = function() {
				return $scope.event.city;
			}

			$scope.getAddress1 = function() {
				return $scope.event.address1;
			}

			$scope.getAddress2 = function() {
				return $scope.event.address2;
			}

			$scope.getState = function() {
				return $scope.event.state;
			}

			$scope.getZip = function() {
				return $scope.event.zip;
			}

			$scope.getCountry = function() {
				return $scope.event.country;
			}

			$scope.getStartMonth = function() {
				return $scope.event.startMonth;
			}

			$scope.getStartDay = function() {
				return $scope.event.startDay;
			}

			$scope.getStartYear = function() {
				return $scope.event.startYear;
			}

			$scope.getStartHour = function() {
				return $scope.event.startHour;
			}

			$scope.getStartMinute = function() {
				return $scope.event.startMinute;
			}

			$scope.getStartMeridiem = function() {
				return $scope.event.startMeridiem;
			}

			$scope.getEndMonth = function() {
				return $scope.event.endMonth;
			}

			$scope.getEndDay = function() {
				return $scope.event.endDay;
			}

			$scope.getEndYear = function() {
				return $scope.event.endYear;
			}

			$scope.getEndHour = function() {
				return $scope.event.endHour;
			}

			$scope.getEndMinute = function() {
				return $scope.event.endMinute;
			}

			$scope.getEndMeridiem = function() {
				return $scope.event.endMeridiem;
			}

			$scope.submit = function(isValid) {
				if(isValid){
					$state.go('eventResults');
				}
			}

		} ]);
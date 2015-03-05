myFamilyApp.controller('newEventController', [ '$scope', '$state',
		function($scope, $state) {
            var event = new Event();
            var attendee = new Attendee();
            
            $scope.eventUIObject = event.toUIObject();
            $scope.attendeeUIObject = attendee.toUIObject();
            $scope.attendeeList = [];

			$scope.attendee = {
				firstName : '',
				lastName : '',
				email : ''
			};
			
			$scope.displayTest = function() {
				console.log("test");
			}

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

			$scope.getAddress1 = function() {
				return $scope.eventUIObject.address1;
			};

			$scope.getAddress2 = function() {
				return $scope.eventUIObject.address2;
			};
			
			$scope.getCity = function() {
				return $scope.eventUIObject.city;
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
			
			$scope.getStartDate = function() {
				var date = new Date($scope.eventUIObject.startDate);
				date.setHours(date.getHours() - 6);
				return date;
			};
			
			$scope.getEndDate = function() {
				var date = new Date($scope.eventUIObject.endDate);
				date.setHours(date.getHours() - 6);
				return date;
			};
			
			this.getForm = function(){
				return document.getElementById("eventForm");
			}

			$scope.submit = function(isValid) {
				if(isValid){
					$state.go('eventResults', {});
				}
			};

		} ]);
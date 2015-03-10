myFamilyApp.controller('newEventController', [ '$scope', '$state',
		function($scope, $state, global) {
			var event = new Event();
			var attendee = new Attendee();

			$scope.eventUIObject = event.toUIObject();
			$scope.attendeeUIObject = attendee.toUIObject();
			$scope.attendeeArray = [];

			$scope.submit = function(isValid) {
				$scope.submitted = true;
				if (isValid && $scope.attendeeArray.length != 0) {
					var eventConfig = {
						name : $scope.eventUIObject.name,
						description : $scope.eventUIObject.description,
						url : $scope.eventUIObject.url,
						checkbox1 : $scope.eventUIObject.checkbox1,
						checkbox2 : $scope.eventUIObject.checkbox2,
						address1 : $scope.eventUIObject.address1,
						address2 : $scope.eventUIObject.address2,
						city : $scope.eventUIObject.city,
						state : $scope.eventUIObject.state,
						zip : $scope.eventUIObject.zip,
						country : $scope.eventUIObject.country,
						startDate : $scope.eventUIObject.startDate,
						endDate : $scope.eventUIObject.endDate,
						attendeeArray : $scope.attendeeArray
					}
					e = new Event(eventConfig);
					global.addEvent(e);
					
					$scope.resetForm();
					$state.go('eventOverview', {});
				}
			};
			
			$scope.resetForm = function() {
				$scope.eventUIObject.name = "";
				$scope.eventUIObject.description = "";
				$scope.eventUIObject.url = "";
				$scope.eventUIObject.checkbox1 = false;
				$scope.eventUIObject.checkbox2 = false;
				$scope.eventUIObject.address1 = "";
				$scope.eventUIObject.address2 = "";
				$scope.eventUIObject.city = "";
				$scope.eventUIObject.state = null;
				$scope.eventUIObject.zip = "";
				$scope.eventUIObject.country = null;
				$scope.eventUIObject.startDate = null;
				$scope.eventUIObject.endDate = null;
				$scope.attendeeUIObject.name = "";
				$scope.attendeeUIObject.email = "";
				
				$scope.attendeeArray = null;
			}
			
			$scope.getEvent = function(){
				return e;
			}

			$scope.addAttendee = function(isValid) {
				if (isValid) {
					$scope.attendeeSubmit = true;
					var attendeeConfig = {
						name : $scope.attendeeUIObject.name,
						email : $scope.attendeeUIObject.email
					}
					var a = new Attendee(attendeeConfig);
					$scope.attendeeArray.push(a);
				}
			};

			$scope.removeAttendee = function(index) {
				$scope.attendeeArray.splice(index, 1);
				if ($scope.attendeeArray.length == 0) {
					$scope.attendeeSubmit = false;
				}
			};

		} ]);
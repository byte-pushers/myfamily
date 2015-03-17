myFamilyApp.controller('eventFormController', [ '$scope', '$state', 'EventService',
		function($scope, $state, EventService) {
			var event = new Event();
			var attendee = new Attendee();
			var save = false;

			$scope.eventUIObject = event.toUIObject();
			$scope.attendeeUIObject = attendee.toUIObject();
			$scope.attendeeArray = [];

			$scope.eventArray = EventService.getEventArray();
			$scope.submitText = "submit";


            initialize();

            function initialize(){
                resetForm();
                if(EventService.getLoad()){
                    fillForm(EventService.getEvent(EventService.getCurrentEventIndex()));
                    $scope.submitText = "save";
                    EventService.setLoad(false);
                    save = true;
                }
                else{
                    resetForm();
                }
            };

			$scope.submit = function(isValid) {
				if (isValid && $scope.attendeeArray.length != 0) {
				    if(save == false){
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
                        EventService.addEvent(e);
                        EventService.setCurrentEventIndex(EventService.getEventArraySize() - 1);
                    }
                    else{
                        saveForm(EventService.getEvent(EventService.getCurrentEventIndex()));
                    }

					$state.go('eventOverview', {});
				}
			};

			$scope.addAttendee = function(isValid) {
				if (isValid) {
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

            function fillForm(event){
                $scope.eventUIObject.name = event.getName();
				$scope.eventUIObject.description = event.getDescription();
				$scope.eventUIObject.url = event.getUrl();
				$scope.eventUIObject.checkbox1 = event.getCheckbox1();
				$scope.eventUIObject.checkbox2 = event.getCheckbox2();
				$scope.eventUIObject.address1 = event.getAddress1();
				$scope.eventUIObject.address2 = event.getAddress2();
				$scope.eventUIObject.city = event.getCity();
				$scope.eventUIObject.state = event.getState();
				$scope.eventUIObject.zip = event.getZip();
				$scope.eventUIObject.country = event.getCountry();
				$scope.eventUIObject.startDate = event.getStartDate();
				$scope.eventUIObject.endDate = event.getEndDate();
				$scope.attendeeUIObject.name = "";
				$scope.attendeeUIObject.email = "";

				$scope.attendeeArray = event.getAttendeeArray();
            };

            function resetForm() {
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

        		$scope.attendeeArray = [];
        	};

            function saveForm(event){
                event.setName($scope.eventUIObject.name);
   				event.setDescription($scope.eventUIObject.description);
   				event.setUrl($scope.eventUIObject.url);
   				event.setCheckbox1($scope.eventUIObject.checkbox1);
   				event.setCheckbox2($scope.eventUIObject.checkbox2);
   				event.setFullAddress($scope.eventUIObject.address1, $scope.eventUIObject.address2, $scope.eventUIObject.city,
   				$scope.eventUIObject.state, $scope.eventUIObject.zip, $scope.eventUIObject.country);
   				event.setStartDate($scope.eventUIObject.startDate);
   				event.setEndDate($scope.eventUIObject.endDate);
                event.setAttendeeArray($scope.attendeeArray);
            };

		} ]);
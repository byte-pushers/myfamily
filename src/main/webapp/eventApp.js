var myFamilyApp = angular.module("myFamilyApp", [ "ui.router" ]);

myFamilyApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("createEvent");

	$stateProvider.state('createEvent', {
		url : "/createEvent",
		templateUrl : "events.ng.html"
	}).state('eventResults', {
		url : "/eventResults",
		templateUrl : "eventResults.ng.html",
		controller : function($scope) {
			ip = $scope.eventName = $scope.getName();
			$scope.eventDescription = $scope.getDescription();
			$scope.eventUrl = $scope.getUrl();
			$scope.eventCheckbox1 = $scope.getCheckbox1();
			$scope.eventCheckbox2 = $scope.getCheckbox2();
			$scope.eventCity = $scope.getCity();
			$scope.eventState = $scope.getState();
			$scope.eventAddress1 = $scope.getAddress1();
			$scope.eventAddress2 = $scope.getAddress2();
			$scope.eventZip = $scope.getZip();
			$scope.eventCountry = $scope.getCountry();
			$scope.eventStartMonth = $scope.getStartMonth();
			$scope.eventStartYear = $scope.getStartYear();
			$scope.eventStartDay = $scope.getStartDay();
			$scope.eventStartHour = $scope.getStartHour();
			$scope.eventStartMinute = $scope.getStartMinute();
			$scope.eventStartMeridiem = $scope.getStartMeridiem();
			$scope.eventEndMonth = $scope.getEndMonth();
			$scope.eventEndYear = $scope.getEndYear();
			$scope.eventEndDay = $scope.getEndDay();
			$scope.eventEndHour = $scope.getEndHour();
			$scope.eventEndMinute = $scope.getEndMinute();
			$scope.eventEndMeridiem = $scope.getEndMeridiem();
		}
	})
});

myFamilyApp.controller('newEventController', [ '$scope', '$state',
		function($scope, $state) {
			
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

			$scope.submit = function() {
				$state.go('eventResults');
			}

		} ]);

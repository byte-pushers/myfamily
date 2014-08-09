function Event(firstNameElement, lastNameElement, descriptionElement, htmlElement,
		check1Value, check2Value, street1Element, street2Element,  cityElement,
		stateElement, zipElement, countryElement, startMonthElement,
		startDayElement, startYearElement, startHourElement,
		startMinuteElement, startMeridiemElement, endMonthElement,
		endDayElement, endYearElement, endHourElement, endMinuteElement,
		endMeridiemElement) {

	var attendeeArray = [];
	
	this.getAttendeeArray  = function() {
		return attendeeArray;
	};
	
	this.addToAttendeeArray  = function(attendee) {
		attendeeArray.push(attendee);
	};
	
	this.removeFromAttendeeArray = function(index) {
		attendeeArray.splice(index, 1);
	};
	
	this.getAttendee = function(index){
		return attendeeArray[index];
	};
	
	this.setFirstName = function(name) {
		firstNameElement = name;
	};
	
	this.getFirstName = function() {
		return firstNameElement;
	};
	
	this.setLastName = function(name) {
		lastNameElement = name;
	};

	this.getLastName = function() {
		return lastNameElement;
	};

	this.getFullName = function() {
		return firstName + " " + lastName;
	};

	this.getDescription = function() {
		return descriptionElement;
	};

	this.getCheckbox1 = function() {
		return check1Value;
	};

	this.getCheckbox2 = function() {
		return check2Value;
	};
	
	this.getHTML = function() {
		return htmlElement;
	};
	
	this.setStreet1 = function(input) {
		street1Element = input;
	};
	
	this.getStreet1 = function() {
		return street1Element;
	};
	
	this.setStreet2 = function(input) {
		street2Element = input;
	};

	this.getStreet2 = function() {
		return street2Element;
	};
	
	this.setCity = function(input) {
		cityElement = input;
	};

	this.getCity = function() {
		return cityElement;
	};

	this.setState = function(input) {
		stateElement = input;
	};
	
	this.getState = function() {
		return stateElement;
	};
	
	this.setZip = function(input) {
		zipElement = input;
	};

	this.getZip = function() {
		return zipElement.value;
	};
	
	this.setCountry = function(input) {
		countryElement = input;
	};

	this.getCountry = function() {
		return countryElement;
	};
	
	this.setStartMonth = function(input) {
		startMonthElement = input;
	};

	this.getStartMonth = function() {
		return startMonthElement;
	};
	
	this.setStartDay = function(input) {
		startDayElement = input;
	};

	this.getStartDay = function() {
		return startDayElement;
	};
	
	this.setStartYear = function(input) {
		startYearElement = input;
	};

	this.getStartYear = function() {
		return startYearElement;
	};
	
	this.setStartHour = function(input) {
		startHourElement = input;
	};

	this.getStartHour = function() {
		return startHourElement;
	};
	
	this.setStartMinute = function(input) {
		startMinuteElement = input;
	};

	this.getStartMinute = function() {
		return startMinuteElement;
	};
	
	this.setStartMeridiem = function(input) {
		startMeridiemElement = input;
	};

	this.getStartMeridiem = function() {
		return startMeridiemElement;
	};
	
	this.setEndMonth = function(input) {
		endMonthElement = input;
	};

	this.getEndMonth = function() {
		return endMonthElement;
	};
	
	this.setEndDay = function(input) {
		endDayElement = input;
	};

	this.getEndDay = function() {
		return endDayElement;
	};
	
	this.setEndYear = function(input) {
		endYearElement = input;
	};

	this.getEndYear = function() {
		return endYearElement;
	};
	
	this.setEndHour = function(input) {
		endHourElement = input;
	};

	this.getEndHour = function() {
		return endHourElement;
	};
	
	this.setEndMinute = function(input) {
		endMinuteElement = input;
	};

	this.getEndMinute = function() {
		return endMinuteElement;
	};
	
	this.setEndMeridiem = function(input) {
		endMeridiemElement = input;
	};

	this.getEndMeridiem = function() {
		return endMeridiemElement;
	};
}
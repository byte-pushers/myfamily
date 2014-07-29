function Event(fnameElement, lnameElement, descriptionElement, htmlElement,
		check1Value, check2Value, street1Element, street2Element,  cityElement,
		stateElement, zipElement, countryElement, startMonthElement,
		startDayElement, startYearElement, startHourElement,
		startMinuteElement, startMeridiemElement, endMonthElement,
		endDayElement, endYearElement, endHourElement, endMinuteElement,
		endMeridiemElement) {

	var attendeeArray = [];
	
	this.addToAttendeeArray(attendee) {
		attendeeArray.push(attendee);
	}
	
	this.removeFromAttendeeArray(index) {
		attendeeArray.splice(index, 1);
	}
	
	this.getAttendee(index){
		return attendeeArray[index];
	}
	
	this.getFirstName = function() {
		return fnameElement.value;
	}

	this.getLastName = function() {
		return lnameElement.value;
	}

	this.getFullName = function() {
		return firstName + " " + lastName;
	}

	this.getDescription = function() {
		return descriptionElement;
	}

	this.getCheckbox1 = function() {
		return check1Value;
	}

	this.getCheckbox2 = function() {
		return check2Value;
	}
	
	this.getHTML = function() {

		return htmlElement.value;
	}
	
	this.getStreet1 = function() {
		return street1Element.value;
	}

	this.getStreet2 = function() {
		return street2Element.value;
	}

	this.getCity = function() {
		return cityElement.value;
	}

	this.getState = function() {
		return stateElement.value;
	}

	this.getZip = function() {
		return zipElement.value;
	}

	this.getCountry = function() {
		return countryElement.value;
	}

	this.getStartMonth = function() {
		return startMonthElement.value;
	}

	this.getStartDay = function() {
		return startDayElement.value;
	}

	this.getStartYear = function() {
		return startYearElement.value;
	}

	this.getStartHour = function() {
		return startHourElement.value;
	}

	this.getStartMinute = function() {
		return startMinuteElement.value;
	}

	this.getStartMeridiem = function() {
		return startMeridiemElement.value;
	}

	this.getEndMonth = function() {
		return endMonthElement.value;
	}

	this.getEndDay = function() {
		return endDayElement.value;
	}

	this.getEndYear = function() {
		return endYearElement.value;
	}

	this.getEndHour = function() {
		return endHourElement.value;
	}

	this.getEndMinute = function() {
		return endMinuteElement.value;
	}

	this.getEndMeridiem = function() {
		return endMeridiemElement.value;
	}
}
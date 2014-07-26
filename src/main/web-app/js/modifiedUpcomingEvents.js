var attendeeCount = 0;

var array = [];
var counter = 0;

function customValidation() {
	var fnameError = document.getElementById("fnameError");
	fnameError.innerHTML = "";

	var lnameError = document.getElementById("lnameError");
	lnameError.innerHTML = "";

	var descriptionError = document.getElementById("descriptionError");
	descriptionError.innerHTML = "";

	var htmlError = document.getElementById("htmlError");
	htmlError.innerHTML = "";

	var street1Error = document.getElementById("street1Error");
	street1Error.innerHTML = "";

	var street2Error = document.getElementById("street2Error");
	street2Error.innerHTML = "";

	var locError = document.getElementById("locError");
	locError.innerHTML = "";

	var startTimeError = document.getElementById("startTimeError");
	startTimeError.innerHTML = "";

	var endTimeError = document.getElementById("endTimeError");
	endTimeError.innerHTML = "";

	var AttendeeMainError = document.getElementById("top-error");
	AttendeeMainError.innerHTML = "";

	var fnameElement = document.getElementById("fname");
	var lnameElement = document.getElementById("lname");
	var descriptionElement = document.getElementById("description");
	var htmlElement = document.getElementById("htmlLink");

	var check1Element = document.getElementById("checkBox1");
	var check2Element = document.getElementById("checkBox2");

	var street1Element = document.getElementById("street1");
	var street2Element = document.getElementById("street2");
	var cityElement = document.getElementById("city");
	var stateElement = document.getElementById("states");
	var zipElement = document.getElementById("zipcode");
	var countryElement = document.getElementById("country");

	var startMonthElement = document.getElementById("month");
	var startDayElement = document.getElementById("day");
	var startYearElement = document.getElementById("year");
	var startHourElement = document.getElementById("hour");
	var startMinuteElement = document.getElementById("minute");
	var startClockElement = document.getElementById("clock");

	var endMonthElement = document.getElementById("eMonth");
	var endDayElement = document.getElementById("eDay");
	var endYearElement = document.getElementById("eYear");
	var endHourElement = document.getElementById("eHour");
	var endMinuteElement = document.getElementById("eMinute");
	var endClockElement = document.getElementById("eClock");

	/* GENERAL EVENT INFORMATION */
	textBoxValidation(fnameElement, fnameError, 2, 10);
	textBoxValidation(lnameElement, lnameError, 2, 15);
	textBoxValidation(descriptionElement, descriptionError, 0, 250);
	URLValidation(htmlElement, htmlError)

	/* EVENT LOCATION INFO */
	textBoxValidation(street1Element, street1Error, 0, 25);
	optionalTextBox(street2Element, street2Error, 9);
	textBoxValidation(cityElement, locError, 2, 15);
	dropDownValidation(stateElement, locError);
	textBoxValidation(zipElement, locError, 5, 5);
	dropDownValidation(countryElement, locError);

	/* START TIME */
	dropDownValidation(startMonthElement, startTimeError);
	dropDownValidation(startDayElement, startTimeError);
	dropDownValidation(startYearElement, startTimeError);
	dropDownValidation(startHourElement, startTimeError);
	dropDownValidation(startMinuteElement, startTimeError);
	dropDownValidation(startClockElement, startTimeError);

	/* END TIME */
	dropDownValidation(endMonthElement, endTimeError);
	dropDownValidation(endDayElement, endTimeError);
	dropDownValidation(endYearElement, endTimeError);
	dropDownValidation(endHourElement, endTimeError);
	dropDownValidation(endMinuteElement, endTimeError);
	dropDownValidation(endClockElement, endTimeError);

	if (attendeeCount < 1) {
		AttendeeMainError.innerHTML = "*Must add at least 1 attendee"
	}
}

function attendeeValidation() {
	var attendeeFirstNameError = document.getElementById("attendeeFError");
	attendeeFirstNameError.innerHTML = "";

	var attendeeLastNameError = document.getElementById("attendeeLError");
	attendeeLastNameError.innerHTML = "";

	var attendeeEmailError = document.getElementById("attendeeEmailError");
	attendeeEmailError.innerHTML = "";

	var attendeeFirstNameElement = document.getElementById("afname");
	var attendeeLastNameElement = document.getElementById("alname");
	var attendeeEmailElement = document.getElementById("aemail");
	
	/* ATTENDEE INFO */
	textBoxValidation(attendeeFirstNameElement, attendeeFirstNameError, 2, 10);
	textBoxValidation(attendeeLastNameElement, attendeeLastNameError, 2, 15);
	emailValidation(attendeeEmailElement, attendeeEmailError);

	if (textBoxValidation(attendeeFirstNameElement, attendeeFirstNameError, 2, 10) == true && textBoxValidation(attendeeLastNameElement, attendeeLastNameError, 2, 15) == true
			&& emailValidation(attendeeEmailElement, attendeeEmailError) == true) {
		attendeeCount++;
		return true;
	} 
	
	return false;
}

function addAttendee(){
	var attendeeFirstNameElement = document.getElementById("afname");
	var attendeeLastNameElement = document.getElementById("alname");
	var attendeeEmailElement = document.getElementById("aemail");
	
	if(attendeeValidation() === true){
		
		var attendee = {
			    firstName: attendeeFirstNameElement.value,
			    lastName : attendeeLastNameElement.value,
			    isDisplayedInTable: false,
			    email    : attendeeEmailElement.value,
			    getEmail : function (){return this.email},
			    fullName : function (){return this.firstName + " " + this.lastName}
		}
		
		array.push(attendee);
		
		addToTable(attendee);
	}
	
}

function deleteRow(id, index){
	array.splice(index, 1);
	
	var row = document.getElementById(id);
    row.parentNode.removeChild(row);
	
    counter--;
	//TODO: pass in row index
	//TODO:     add row ID and attendee index to the onClick event
	//TODO: delete row index from array
	//TODO: repaint method to repaint table based on array
	//TODO:     clear out table method
	
	//TODO: pass in row index and row ID 
	//TODO:     add row ID to each row created 
	//TODO:     add row ID and attendee index to the onClick event 
	//TODO: delete row index from array 
	//TODO: only delete that row based on row ID
}

function addToTable(){
	
	var table = document.getElementById("table");
	var row = table.insertRow(counter + 1);
	row.id = "row" + counter;
	
	var removeRow=document.createElement("BUTTON");
	var text=document.createTextNode("Remove");
	removeRow.appendChild(text);
	removeRow.onclick = function(){
		deleteRow(row.id, counter);
	  };

	var cell0 = row.insertCell(0)
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	
	cell0.innerHTML = counter + 1;
	cell1.innerHTML = array[counter].fullName(); 
	cell2.innerHTML = array[counter].getEmail();
	cell3.appendChild(removeRow);
	
	counter++;
}

function textBoxValidation(element, error, min, max) {
	if (isRequired(true) == true && isEmpty(element.value) == false) {
		if (isGreaterThanMaxLength(element.value, max)) {
			tooLongError(error, max);
			return false;
		}
		if (isLessThanMinLength(element.value, min)) {
			tooShortError(error, min)
			return false;
		}
	} else {
		requiredError(error);
		return false
	}
	return true;
}

function optionalTextBox(element, error, max) {
	if (isGreaterThanMaxLength(element.value, max)) {
		error.innerHTML = "*Cannot have more the max characters";
		return false;
	}
	return true;
}

function dropDownValidation(element, error) {
	if (isRequired(true) == true && isEmpty(element.value) == false) {
		return true;
	} else {
		allFieldsError(error);
		return false;
	}
}

function requiredError(errorString) {
	errorString.innerHTML = "*Must be filled out"
}

function allFieldsError(errorString) {
	errorString.innerHTML = "*Must be filled out"
}

function tooLongError(errorString, length) {
	errorString.innerHTML = "*Cannot be longer than " + length + " characters";
}

function tooShortError(errorString, length) {
	errorString.innerHTML = "*Cannot be shorter than " + length + " characters";
}

function emailValidation(element, error) {
	if (isRequired(true) == true && isEmpty(element.value) == false) {
		if (validateEmail(element.value) == false) {
			error.innerHTML = "*Not Valid Email";
			return false;
		}
	} else {
		requiredError(error);
		return false;
	}
	return true;
}

function URLValidation(element, error) {
	if (validateURL(element.value) == false && element.value.length > 0) {
		error.innerHTML = "*Not a valid URL";
		return false;
	}
	return true;
}

function isGreaterThanMaxLength(targetString, maxLength) {
	var result = false;

	if (targetString.length > maxLength) {
		result = true;
	}

	return result;
}

function isLessThanMinLength(targetString, minLength) {
	var result = false;

	if (targetString.length < minLength) {
		result = true;
	}

	return result
}

function validateURL(link) {
	var URL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return URL.test(link);
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function isRequired(required) {
	var result = false;

	if (required == true) {
		result = true;
	}

	return result;
}

function isEmpty(targetObject) {
	var result = true;

	if (targetObject != null && targetObject != undefined && targetObject.length > 0) {
		result = false;
	}

	return result;
}
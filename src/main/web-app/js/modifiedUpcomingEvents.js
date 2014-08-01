var eventArray = [];
var attendeeCounter = 0;

var eventTest = new Event();

function customValidation() {
	var valid = true;

	var firstNameError = document.getElementById("firstNameError");
	firstNameError.innerHTML = "";

	var lastNameError = document.getElementById("lastNameError");
	lastNameError.innerHTML = "";

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

	var firstNameElement = document.getElementById("fname");
	var LastNameElement = document.getElementById("lname");
	var descriptionElement = document.getElementById("description");
	var htmlElement = document.getElementById("htmlLink");

	var check1Element = document.getElementById("checkBox1");
	var check1Value = false;
	var check2Element = document.getElementById("checkBox2");
	var check2Value = false;

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
	var startMeridiemElement = document.getElementById("clock");

	var endMonthElement = document.getElementById("eMonth");
	var endDayElement = document.getElementById("eDay");
	var endYearElement = document.getElementById("eYear");
	var endHourElement = document.getElementById("eHour");
	var endMinuteElement = document.getElementById("eMinute");
	var endMeridiemElement = document.getElementById("eClock");

	/* GENERAL EVENT INFORMATION */
	if (!textBoxValidation(firstNameElement, firstNameError, 2, 10)) {valid = false;}
	if (!textBoxValidation(LastNameElement, lastNameError, 2, 15)) {valid = false;}
	if (!textBoxValidation(descriptionElement, descriptionError, 0, 250)) {valid = false;}
	URLValidation(htmlElement, htmlError)
	if (isChecked(check1Element)) {check1Value = true;}
	if (isChecked(check2Element)) {check2Value = true;}

	/* EVENT LOCATION INFO */
	if (!textBoxValidation(street1Element, street1Error, 0, 25)) {valid = false;}
	optionalTextBox(street2Element, street2Error, 9)
	if (!textBoxValidation(cityElement, locError, 2, 15)) {valid = false;}
	if (!dropDownValidation(stateElement, locError)) {valid = false;}
	if (!textBoxValidation(zipElement, locError, 5, 5)) {valid = false;}
	if (!dropDownValidation(countryElement, locError)) {valid = false;}

	/* START TIME */
	if (!dropDownValidation(startMonthElement, startTimeError)) {valid = false;}
	if (!dropDownValidation(startDayElement, startTimeError)) {valid = false;}
	if (!dropDownValidation(startYearElement, startTimeError)) {valid = false;}
	if (!dropDownValidation(startHourElement, startTimeError)) {valid = false;}
	if (!dropDownValidation(startMinuteElement, startTimeError)) {valid = false;}
	if (!dropDownValidation(startMeridiemElement, startTimeError)) {valid = false;}

	/* END TIME */
	if (!dropDownValidation(endMonthElement, endTimeError)) {valid = false;}
	if (!dropDownValidation(endDayElement, endTimeError)) {valid = false;}
	if (!dropDownValidation(endYearElement, endTimeError)) {valid = false;}
	if (!dropDownValidation(endHourElement, endTimeError)) {valid = false;}
	if (!dropDownValidation(endMinuteElement, endTimeError)) {valid = false;}
	if (!dropDownValidation(endMeridiemElement, endTimeError)) {valid = false;}

	if (valid == true) {
		var event = new Event(firstNameElement, LastNameElement,
				descriptionElement, htmlElement, check1Value, check2Value, street1Element, street2Element, cityElement, 
				stateElement, zipElement, countryElement, startMonthElement, startDayElement, startYearElement, 
				startHourElement, startMinuteElement,startMeridiemElement, endMonthElement, endDayElement, endYearElement,
				endHourElement, endMinuteElement, endMeridiemElement);
		eventArray.push(event);
	}
}

function textBoxValidation(element, error, min, max) {
	if (isEmpty(element.value) == false) {
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
	if (isEmpty(element.value) == false) {
		return true;
	} else {
		allFieldsError(error);
		return false;
	}
}

function attendeeValidation(firstName, lastName, email, firstNameError, lastNameError, emailError) {
	var firstNameBoolean = false,
		lastNameBoolean = false, 
		emailBoolean = false;
	
	if(textBoxValidation(firstName, firstNameError, 2, 10) == true) {
		firstNameBoolean = true;
	}
	if(textBoxValidation(lastName, lastNameError, 2, 15) == true){
		lastNameBoolean = true;
	}
	if(emailValidation(email, emailError) == true){
		emailBoolean = true;
	}

	if (firstNameBoolean == true && lastNameBoolean == true &&  emailBoolean == true) {
		return true;
	}
		return false;
}

function addAttendee() {
	var attendeeFirstNameElement = document.getElementById("attendeeFirstName");
	var attendeeLastNameElement = document.getElementById("attendeeLastName");
	var attendeeEmailElement = document.getElementById("attendeeEmail");

	var attendeeFirstNameError = document.getElementById("attendeeFError");
	attendeeFirstNameError.innerHTML = "";

	var attendeeLastNameError = document.getElementById("attendeeLError");
	attendeeLastNameError.innerHTML = "";

	var attendeeEmailError = document.getElementById("attendeeEmailError");
	attendeeEmailError.innerHTML = "";

	if (attendeeValidation(attendeeFirstNameElement, attendeeLastNameElement, attendeeEmailElement, attendeeFirstNameError,
			attendeeLastNameError, attendeeEmailError) === true) {
		
		var attendee = new Attendee(attendeeFirstNameElement, attendeeLastNameElement, attendeeEmailElement);
		eventTest.addToAttendeeArray(attendee);
		addToTable();
	}
}

function addToTable() {
	var table = document.getElementById("attendeeTable");
	var rowCount = (table.rows.length);
	var row = table.insertRow(rowCount);

	var cell0 = row.insertCell(0)
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);

	cell0.innerHTML = rowCount;
	cell1.innerHTML = eventTest.getAttendee(eventTest.getAttendeeArray().length - 1).getFullName();
	cell2.innerHTML = eventTest.getAttendee(eventTest.getAttendeeArray().length - 1).getEmail();
	cell3.appendChild(createRemoveRowButton(eventTest.getAttendeeArray().length - 1));
}

function createRemoveRowButton(attendeeArrayIndex) {
	var removeRowButton = document.createElement("BUTTON");
	var text = document.createTextNode("Remove");
	removeRowButton.appendChild(text);
	removeRowButton.onclick = function() {
		deleteRow(attendeeArrayIndex);
	};

	return removeRowButton;
}

function deleteRow(attendeeIndex) {
	eventTest.removeFromAttendeeArray(attendeeIndex);
	clearTable();
	paintTable();
}

function clearTable() {
	var table = document.getElementById("attendeeTable");
	if (table.rows && table.rows.length >= 2) {
		table.deleteRow(table.rows.length - 1);
		clearTable();
	}
}

function paintTable() {
	var table = document.getElementById("attendeeTable");
	for (var i = 0; i < eventTest.getAttendeeArray().length; i++) {
		var row = table.insertRow(i + 1);

		var cell0 = row.insertCell(0)
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);

		cell0.innerHTML = i + 1;
		cell1.innerHTML = eventTest.getAttendee(i).getFullName();
		cell2.innerHTML = eventTest.getAttendee(i).getEmail();
		cell3.appendChild(createRemoveRowButton(eventTest.getAttendee(i)));
	}
}

function requiredError(errorString) {
	errorString.innerHTML = "*Must be filled out";
}

function notValidEmailError(errorString) {
	errorString.innerHTML = "*Not a valid email";
}

function notValidURLError(errorString) {
	errorString.innerHTML = "*Not a valid URL";
}

function allFieldsError(errorString) {
	errorString.innerHTML = "*Must be filled out";
}

function tooLongError(errorString, length) {
	errorString.innerHTML = "*Cannot be longer than " + length + " characters";
}

function tooShortError(errorString, length) {
	errorString.innerHTML = "*Cannot be shorter than " + length + " characters";
}

function emailValidation(element, error) {
	if (isEmpty(element.value) == false) {
		if (validateEmail(element.value) == false) {
			notValidEmailError(error);
			return false;
		}
		return true;
	} else {
		requiredError(error);
		return false;
	}
	return true;
}

function URLValidation(element, error) {
	if (validateURL(element.value) == false && element.value.length > 0) {
		notValidURLError(error);
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
	var re = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
	return re.test(email);
}

function isChecked(checkbox) {
	var checkbox_val = checkbox.value;
	if (checkbox.checked == true) {
		return true;
	} else {
		return false;
	}
}

function isEmpty(targetObject) {
	var result = true;

	if (targetObject != null && targetObject != undefined
			&& targetObject.length > 0) {
		result = false;
	}

	return result;
}
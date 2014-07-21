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

	var attendeeFError = document.getElementById("attendeeFError");
	attendeeFError.innerHTML = "";
	
	var attendeeLError = document.getElementById("attendeeLError");
	attendeeLError.innerHTML = "";
	
	var attendeeEmailError = document.getElementById("attendeeEmailError");
	attendeeEmailError.innerHTML = "";

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
	
	var aFNameElement = document.getElementById("afname");
	var aLNameElement = document.getElementById("alname");
	var aEmailElement = document.getElementById("aemail");

	/*GENERAL EVENT INFORMATION */
	textBoxValidation(fnameElement, fnameError, 2 , 10);
	textBoxValidation(lnameElement, lnameError, 2 ,15);
	textBoxValidation(descriptionElement, descriptionError, 0 ,250);
	URLValidation(htmlElement, htmlError)
	
	/*EVENT LOCATION INFO */
	textBoxValidation(street1Element, street1Error, 0 , 25);
	optionalTextBox(street2Element, street2Error, 9);
	textBoxValidation(cityElement, locError, 2 , 15);
	dropDownValidation(stateElement, locError);
	textBoxValidation(zipElement, locError, 5 , 5);
	dropDownValidation(countryElement, locError);
	
	/*START TIME */
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
	
	/*ATTENDEE INFO */
	textBoxValidation(aFNameElement, attendeeFError, 2 , 10);
	textBoxValidation(aLNameElement, attendeeLError, 2 , 15);
	emailValidation(aEmailElement, attendeeEmailError);
}

function textBoxValidation(element, error, min, max){
	if (isRequired(true) == true && isEmpty(element.value) == false) {
		if (isGreaterThanMaxLength(element.value, max)) {
			tooLongError(error, max);
		}
		if (isLessThanMinLength(element.value, min)) {
			tooShortError(error, min)
		}
	} else {
		requiredError(error);
		}
}

function optionalTextBox(element, error, max){
	if (isGreaterThanMaxLength(element.value, max)) {
		error.innerHTML = "*Cannot have more the max characters";
	}
}

function dropDownValidation(element, error){
	if (isRequired(true) == true && isEmpty(element.value) == false) {

	} else {
		allFieldsError(error);
	}
}

function emailValidation(element, error){
	if (isRequired(true) == true && isEmpty(element.value) == false) {
		if(validateEmail(element.value) ==  false){
			error.innerHTML = "*Not Valid Email";
		}
	} else {
		requiredError(error);
	}
}

function URLValidation(element, error){
	if(validateURL(element.value) == false && element.value.length > 0){
		error.innerHTML = "*Not a valid URL";
	}
}

function requiredError(errorString){
	errorString.innerHTML = "*Must be filled out"
}

function allFieldsError(errorString){
	errorString.innerHTML = "*Must be filled out"
}

function tooLongError(errorString, length){
	errorString.innerHTML = "*Cannot be longer than " + length + " characters";
}

function tooShortError(errorString, length){
	errorString.innerHTML = "*Cannot be shorter than " + length + " characters";
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
    var URL = new RegExp(
          "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
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

	if (targetObject != null && targetObject != undefined
			&& targetObject.length > 0) {
		result = false;
	}

	return result;
}
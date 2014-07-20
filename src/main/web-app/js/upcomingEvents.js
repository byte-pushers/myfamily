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

	var attendeeError = document.getElementById("attendeeError");
	attendeeError.innerHTML = "";

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
	
	var aNameElement = document.getElementById("aname");
	var aEmailElement = document.getElementById("aemail");

	/* FIRST NAME */
	if (isRequired(true) == true && isEmpty(fnameElement.value) == false) {
		if (isGreaterThanMaxLength(fnameElement.value, 10)) {
			fnameError.innerHTML = "Cannot be longer then 10 characters";
		}
		if (isLessThanMinLength(fnameElement.value, 2)) {
			fnameError.innerHTML = "Cannot be less then 2 characters";
		}
	} else {
		fnameError.innerHTML = "Must be filled out";
	}

	/* LAST NAME */
	if (isRequired(true) == true && isEmpty(lnameElement.value) == false) {
		if (isGreaterThanMaxLength(lnameElement.value, 15)) {
			lnameError.innerHTML = "Cannot be longer than 15 characters";
		}
		if (isLessThanMinLength(lnameElement.value, 2)) {
			lnameError.innerHTML = "Cannot be less than 2 characters";
		}
	} else {
		lnameError.innerHTML = "Must be filled out";
	}

	/* DESCRIPTION */
	if (isRequired(true) == true && isEmpty(descriptionElement.value) == false) {
		if (isGreaterThanMaxLength(descriptionElement.value, 250)) {
			descriptionError.innerHTML = "Cannot be longer then 250 characters";
		}
		if (isLessThanMinLength(descriptionElement.value, 0)) {
			descriptionError.innerHTML = "Not enough characters";
		}
	} else {
		descriptionError.innerHTML = "Must be filled out";
	}
	
	if(validateURL(htmlElement.value) == false && htmlElement.value.length > 0){
		htmlError.innerHTML = "Not a valid URL";
	}

	/* STREET ADDRESS 1 */
	if (isRequired(true) == true && isEmpty(street1Element.value) == false) {
		if (isGreaterThanMaxLength(street1Element.value, 25)) {
			street1Error.innerHTML = "Cannot have more the 25 characters";
		}
		if (isLessThanMinLength(street1Element.value, 0)) {
			street1Error.innerHTML = "";
		}
	} else {
		street1Error.innerHTML = "Must be filled out";
	}

	/* STREET ADDRESS 2 */
	if (isGreaterThanMaxLength(street2Element.value, 9)) {
		street2Error.innerHTML = "Cannot have more the 25 characters";
	}

	/* CITY */
	if (isRequired(true) == true && isEmpty(cityElement.value) == false) {
		if (isGreaterThanMaxLength(cityElement.value, 15)) {
			locError.innerHTML = "Cannot be more than 20 characters";
		}
		if (isLessThanMinLength(cityElement.value, 2)) {
			locError.innerHTML = "Cannot be less than 2 characters!";
		}
	} else {
		locError.innerHTML = "Please fillout all fields";
	}
	
	/*STATE*/
	if (isRequired(true) == true && isEmpty(stateElement.value) == false) {

	} else {
		locError.innerHTML = "Please fillout all fields";
	}

	/* ZIPCODE */
	if (isRequired(true) == true && isEmpty(zipElement.value) == false) {
		if (isGreaterThanMaxLength(zipElement.value, 5)) {
			locError.innerHTML = "Zipcode must be 5 characters";
		}
		if (isLessThanMinLength(zipElement.value, 5)) {
			locError.innerHTML = "Zipcode must be 5 characters";
		}
	} else {
		locError.innerHTML = "Please fillout all fields";
	}
	
	/*COUNTRY*/
	if (isRequired(true) == true && isEmpty(countryElement.value) == false) {

	} else {
		locError.innerHTML = "Please fillout all fields";
	}

	/* START TIME */
	if (isRequired(true) == true && isEmpty(startMonthElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(startDayElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(startYearElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(startHourElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(startMinuteElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(startClockElement.value) == false) {

	} else {
		startTimeError.innerHTML = "Please fillout all fields";
	}
	
	
	
	/* END TIME */
	if (isRequired(true) == true && isEmpty(endMonthElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(endDayElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(endYearElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(endHourElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(endMinuteElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	if (isRequired(true) == true && isEmpty(endClockElement.value) == false) {

	} else {
		endTimeError.innerHTML = "Please fillout all fields";
	}

	/* EMAIL NAME */
	if (isRequired(true) == true && isEmpty(aEmailElement.value) == false) {
		if (isGreaterThanMaxLength(aEmailElement.value, 25)) {
			attendeeError.innerHTML = "Cannot be more than 25 characters!";
		}
		if (isLessThanMinLength(aEmailElement.value, 8)) {
			attendeeError.innerHTML = "Cannot be less than 8 characters!";
		}
	} else {
		attendeeError.innerHTML = "Must be filled out";
	}

	/* ATTENDEE NAME */
	if (isRequired(true) == true && isEmpty(aNameElement.value) == false) {
		if (isGreaterThanMaxLength(aNameElement.value, 10)) {
			attendeeError.innerHTML = "Cannot be more than 10 characters";
		}
		if (isLessThanMinLength(aNameElement.value, 2)) {
			attendeeError.innerHTML = "Cannot be less than 2 characters";
		}
	} else {
		attendeeError.innerHTML = "Must be filled out";
	}
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
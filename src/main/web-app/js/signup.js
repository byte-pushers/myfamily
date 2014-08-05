var validationMsg = {
	"msg" : ""
};
function validateMyForm() {
	validateFirstName();
	validateMiddleName();
	validateLastName();
	validateMonth();
	validateDay();
	validateYear();
	validateCountry();
	validateState();
	validateCity();
	validateZipcode();
	validateEmail();
	validateUsername();
	validatePassword();
	validateConPassword();

	if (validationMsg.msg != null && validationMsg.msg != undefined) {
		alert(validationMsg.msg);
	}
}

function validateRequired(formElement,required, minLength, maxLength, validationMsg, elementLabelName, validationFunction, defaultValue) {
	if(required){
		if(isEmpty(formElement.value, defaultValue)){
			// if required, ensure the element is not empty.
			validationMsg.msg = validationMsg.msg + "Your " + elementLabelName + " is required, please enter a value.\r\n";
		} else if(underMin(formElement.value.length, minLength)){
			// if required, ensure the element has greater than or equal to the minimum values required
			validationMsg.msg = validationMsg.msg + "Please enter more characters for your " + elementLabelName + ". \r\n"; 
		} else if(overMax(formElement.value.length, maxLength)){
			// if required, ensure the element has less than or equal to the maximum required 
			validationMsg.msg = validationMsg.msg + "Please enter less characters for your " + elementLabelName + ". \r\n"; 
		}else if(validationFunction(formElement.value)== false){
			// if required, ensure that the value is the correct type (i.e. only numbers or only alpha numeric, or valid month names, or etc.)
			validationMsg.msg = validationMsg.msg + "Please enter a valid " + elementLabelName + ". \r\n";
		}
		
	} else if(!required && !isEmpty(formElement.value, defaultValue)){
		//if not required and the element has a value, ensure the element is not empty.
		if(underMin(formElement.value.length, minLength)){
			// if not required and the element has a value, ensure the element has greater than or equal to the minimum values required
			validationMsg.msg = validationMsg.msg + "Please enter more characters for your " + elementLabelName + ". \r\n";
		}else if(overMax(formElement.value.length, maxLength)){
			// if not required and the element has a value, ensure the element has less than or equal to the maximum required 
			validationMsg.msg = validationMsg.msg  + "Please enter less characters for your " + elementLabelName + ". \r\n"; 
		}else if(validationFunction(formElement.value)== false){
			// if not required and the element has a value, ensure that the value is the correct type (i.e. only numbers or only alpha numeric, or valid month names, or etc.)
			validationMsg.msg = validationMsg.msg + "Please enter a valid " + elementLabelName + ". \r\n";
		}
		
		
	}
}

function validateFirstName() {
	var firstNameInputTextElement = document.getElementById('firstName');
	validateRequired(firstNameInputTextElement, true, 3, 30, validationMsg, "first name", isValidFirstName);
	
}
function validateMiddleName() {
	var middleNameInputTextElement = document.getElementById('middleName');
	validateRequired(middleNameInputTextElement, false, 3, 30, validationMsg, "middle name", isValidMiddleName);
}
function validateLastName() {
	var lastNameInputTextElement = document.getElementById('lastName');
	validateRequired(lastNameInputTextElement, true, 3, 30, validationMsg, "last name", isValidLastName);
}
function validateMonth() {
	var monthInputTextElement = document.getElementById('month');

	validateRequired(monthInputTextElement,true, 3, 8, validationMsg, "birth month", CalendarMonth.isValidMonth);

}

function validateDay() {
	var dayInputTextElement = document.getElementById('day');

	validateRequired(dayInputTextElement, true, 1, 2, validationMsg, "day of birth", CalendarDay.isValidDay);

}
function validateYear() {
	var yearInputTextElement = document.getElementById('year');

	validateRequired(yearInputTextElement, true, 4, 4, validationMsg, "birth year", isValidYear);


}
function validateCountry() {
	var countrySelectDropDownMenu = document.getElementById('countrySelect');

	if (isEmpty(countrySelectDropDownMenu.value, "choose")== true){
		validationMsg.msg = validationMsg.msg + "Your country is required, please enter a value.\r\n";
	}

}
function validateState() {
	var stateSelectDropDownMenu = document.getElementById('stateSelect');

	if (isEmpty(stateSelectDropDownMenu.value, "choose")== true){
		validationMsg.msg = validationMsg.msg + "Your state is required, please enter a value.\r\n";
	}

}
function validateCity() {
	var cityInputTextElement = document.getElementById('city');

	validateRequired(cityInputTextElement, true, 3, 30, validationMsg, "current city", isValidCity);

}
function validateZipcode() {
	var zipcodeInputTextElement = document.getElementById('zipcode');

	validateRequired(zipcodeInputTextElement, true, 5, 5, validationMsg, "zipcode", isValidZipcode);

}
function validateEmail() {
	var emailInputTextElement = document.getElementById('email');

	validateRequired(emailInputTextElement, true, 6, 30, validationMsg, "email", validateIsValidEmail);

}
function validateUsername() {
	var usernameInputTextElement = document.getElementById('username');

	validateRequired(usernameInputTextElement, true, 6, 15, validationMsg, "username", isValidUserName);

}
function validatePassword() {
	var passwordInputPasswordElement = document.getElementById('password');

	validateRequired(passwordInputPasswordElement, true, 6, 15, validationMsg, "password", isValidPassword);
	
}
function validateConPassword() {
	
	var cPasswordInputPasswordElement = document.getElementById('confirmPassword');

	validateRequired(cPasswordInputPasswordElement, true, 6, 15, validationMsg, "confirm password", isValidPassword);

}
function isEmpty(targetString, defaultValue) {
	var result = true;
	if(targetString != null && targetString != undefined && targetString.length > 0){
		if(defaultValue != null && defaultValue != undefined && defaultValue.length > 0){
			if(targetString != defaultValue){
				result = false;
			} 
		} 
	}
	return result;
}

function overMax(variableLength, maxLength) {
	if (variableLength > maxLength) {
		return true;
	}
}
function underMin(variableLength, minLength) {
	if (variableLength < minLength) {
		return true;
	}
}

function isValidFirstName(fNameVal) {
	var nVal = new RegExp("^[A-Z]+$", "i");
	if (nVal.test(fNameVal)) {
	} else if (fNameVal != 0) {
		return false;
	}
}
function isValidMiddleName(mNameVal) {
	var nVal = new RegExp("^[A-Z]+$", "i");
	if (nVal.test(mNameVal)) {
	} else if (mNameVal != 0) {
		return false;
	}
}
function isValidLastName(lNameVal) {
	var nVal = new RegExp("^[A-Z]+$", "i");
	if (nVal.test(lNameVal)) {
	} else if (lNameVal != 0) {
		return false;
	}

}

function validateIsDay(dayVal) {
	if (dayVal != 0 && dayVal != 1 && dayVal != 2 && dayVal != 3 && dayVal != 4 && dayVal != 5 && dayVal != 6 && dayVal != 7 && dayVal != 8 && dayVal != 9
			&& dayVal != 10 && dayVal != 11 && dayVal != 12 && dayVal != 13 && dayVal != 14 && dayVal != 15 && dayVal != 16 && dayVal != 17 && dayVal != 18
			&& dayVal != 19 && dayVal != 20 && dayVal != 21 && dayVal != 22 && dayVal != 23 && dayVal != 24 && dayVal != 25 && dayVal != 26 && dayVal != 27
			&& dayVal != 28 && dayVal != 29 && dayVal != 30 && dayVal != 31) {
		return false;
	}
}
function isValidYear(yearVal){
	var yRegExp = new RegExp("^[0-9]{4}$");
	if (yRegExp.test(zipVal)) {
		return true;
	} else if (yRegExp != 0) {
		return false;
	}
}
function isValidCity(citVal) {
	var cVal = new RegExp("^[A-Z.']+$", "i");
	if (cVal.test(citVal)) {
		return true;
	} else if (citVal != 0) {
		return false;
	}

}
function isValidZipcode(zipVal) {
	var zVal = new RegExp("^[0-9]{5}$");
	if (zVal.test(zipVal)) {
		return true;
	} else if (zipVal != 0) {
		return false;
	}

}

function isValidUserName(userVal) {
	var uVal = new RegExp("^[A-Z@!#._-]+$", "i");
	if (uVal.test(userVal)) {
		return true;
	} else if (userVal != 0) {
		return false;
	}

}
function isValidPassword(passVal) {
	var pVal = new RegExp("^[A-Z0-9@!._-]+$", "i");
	if (pVal.test(passVal)) {
		return true;
	} else if (passVal != 0) {
		return false;
	}

}

function confirmPassword(passwordVal, cPasswordVal, validationMsg) {
	if (passwordVal != cPasswordVal) {

		result = false;
	}

}
function validateIsValidEmail(emailVal, validationMsg) {
	var eval = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
	if (eval.test(emailVal)) {
		return true;
	} else if (emailVal != 0) {
		return false;
	}

}
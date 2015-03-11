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

	if (validationMsg.msg != null && validationMsg.msg != undefined ) {
		alert(validationMsg.msg);
	}
}

function validateRequired(formElement,required, minLength, maxLength, validationMsg, elementLabelName, validationFunction, regEx) {
	if(required){
		if(isEmpty(formElement.value)){
			// if required, ensure the element is not empty.
			validationMsg.msg = validationMsg.msg + "Your " + elementLabelName + " is required, please enter a value.\r\n";
		} else if(underMin(formElement.value.length, minLength)){
			// if required, ensure the element has greater than or equal to the minimum values required
			validationMsg.msg = validationMsg.msg + "Please enter more characters for your " + elementLabelName + ". \r\n"; 
		} else if(overMax(formElement.value.length, maxLength)){
			// if required, ensure the element has less than or equal to the maximum required 
			validationMsg.msg = validationMsg.msg + "Please enter less characters for your " + elementLabelName + ". \r\n"; 
		}else if(validationFunction(formElement.value, regEx)== false){
			// if required, ensure that the value is the correct type (i.e. only numbers or only alpha numeric, or valid month names, or etc.)
			validationMsg.msg = validationMsg.msg + "Please enter a valid " + elementLabelName + ". \r\n";
		}
		
	} else if(!required && !isEmpty(formElement.value)){
		//if not required and the element has a value, ensure the element is not empty.
		if(underMin(formElement.value.length, minLength)){
			// if not required and the element has a value, ensure the element has greater than or equal to the minimum values required
			validationMsg.msg = validationMsg.msg + "Please enter more characters for your " + elementLabelName + ". \r\n";
		}else if(overMax(formElement.value.length, maxLength)){
			// if not required and the element has a value, ensure the element has less than or equal to the maximum required 
			validationMsg.msg = validationMsg.msg  + "Please enter less characters for your " + elementLabelName + ". \r\n"; 
		}else if(validationFunction(formElement.value, regEx)== false){
			// if not required and the element has a value, ensure that the value is the correct type (i.e. only numbers or only alpha numeric, or valid month names, or etc.)
			validationMsg.msg = validationMsg.msg + "Please enter a valid " + elementLabelName + ". \r\n";
		}
		
		
	}
}

function validateFirstName() {
	var firstNameInputTextElement = document.getElementById('firstName');
	var regExp = new RegExp("^[A-Z]+$", "i");
	validateRequired(firstNameInputTextElement, true, 3, 30, validationMsg, "first name", isValidFirstName, regExp );
	
}
function validateMiddleName() {
	var middleNameInputTextElement = document.getElementById('middleName');
	var regExp = new RegExp("^[A-Z]+$", "i");
	validateRequired(middleNameInputTextElement, false, 3, 30, validationMsg, "middle name", isValidMiddleName, regExp);
}
function validateLastName() {
	var lastNameInputTextElement = document.getElementById('lastName');
	var regExp = new RegExp("^[A-Z]+$", "i");
	validateRequired(lastNameInputTextElement, true, 3, 30, validationMsg, "last name", isValidLastName, regExp);
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
	var regExp = new RegExp("^[0-9]{4}$");
	validateRequired(yearInputTextElement, true, 4, 4, validationMsg, "birth year", isValidYear, regExp);


}
function validateCountry() {
	var countrySelectDropDownMenu = document.getElementById('countrySelect');
	
	if (isEmpty(countrySelectDropDownMenu.value, "choose")){
		validationMsg.msg = validationMsg.msg + "Your country is required, please enter a value.\r\n";
	}

}
function validateState() {
	var stateSelectDropDownMenu = document.getElementById('stateSelect');

	if (isEmpty(stateSelectDropDownMenu.value, "choose")){
		validationMsg.msg = validationMsg.msg + "Your state is required, please enter a value.\r\n";
	}

}
function validateCity() {
	var cityInputTextElement = document.getElementById('city'); 
	var regExp = new RegExp("^[A-Z.']+$", "i");
	validateRequired(cityInputTextElement, true, 3, 30, validationMsg, "city", isValidCity, regExp);

}
function validateZipcode() {
	var zipcodeInputTextElement = document.getElementById('zipcode');
	var regExp = new RegExp("^[0-9]{5}$");
	validateRequired(zipcodeInputTextElement, true, 5, 5, validationMsg, "zipcode", isValidZipcode, regExp);

}
function validateEmail() {
	var emailInputTextElement = document.getElementById('email');
	var regExp = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
	validateRequired(emailInputTextElement, true, 6, 30, validationMsg, "email", isValidEmail, regExp);

}
function validateUsername() {
	var usernameInputTextElement = document.getElementById('username');
	var regExp = new RegExp("^[A-Z@!#._-]+$", "i");
	validateRequired(usernameInputTextElement, true, 6, 15, validationMsg, "username", isValidUsername, regExp);

}
function validatePassword() {
	var passwordInputPasswordElement = document.getElementById('password');
	var regExp = new RegExp("^[A-Z0-9@!._-]+$", "i");
	validateRequired(passwordInputPasswordElement, true, 6, 15, validationMsg, "password", isValidPassword, regExp);
	
}
function validateConPassword() {
	var passwordInputPasswordElement = document.getElementById('password').value;
	var cPasswordInputPasswordElement = document.getElementById('confirmPassword').value;
	if (isEmpty(cPasswordInputPasswordElement)){
		validationMsg.msg = validationMsg.msg + "Confirming your password is required, please enter a value.\r\n";
	}else if (validateIsEqualPasswords(passwordInputPasswordElement, cPasswordInputPasswordElement) == false){
		validationMsg.msg = validationMsg.msg + "Passwords dont match, please confirm your password\r\n";
	}
	

}
function isEmpty(targetString, defaultValue) {
	var result = true;
	if(targetString != null && targetString != undefined && targetString.length > 0){
		if(defaultValue != null && defaultValue != undefined && defaultValue.length > 0){
			if(targetString == defaultValue){
				
			} else{
				result = false;
			      }
		  } else{
			  result = false;
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

function isValidFirstName(fNameVal, regEx) {
	if (regEx.test(fNameVal)) {
		return true;
	} 
	return false;
}
function isValidMiddleName(mNameVal, regEx) {
	if (regEx.test(mNameVal)) {
		return true;
	} 
	return false;
}
function isValidLastName(lNameVal, regEx) {
	if (regEx.test(lNameVal)) {
		return true;
	} 
	return false;
}
function isValidYear(yearVal, regEx){
	
	if (regEx.test(yearVal)) {
		return true;
	} 
}
function isValidCity(citVal, regExp) {
	if (regExp.test(citVal)) {
		return true;
	}
	return false;
}
function isValidZipcode(zipVal, regExp) {
	if (regExp.test(zipVal)) {
		return true;
	}
	return false;
}

function isValidUsername(userVal, regExp) {
	if (regExp.test(userVal)) {
		return true;
	} 
	return false;
}
function isValidEmail(emailVal, regExp) {
	if (regExp.test(emailVal)) {
		return true;
	}
	return false;
}
function isValidPassword(passVal, regExp) {
	if (regExp.test(passVal)) {
		return true;
	}
	return false;
}

function validateIsEqualPasswords(passwordVal, cPasswordVal) {
	var result = true;
	if (passwordVal != cPasswordVal) {
	result = false;
	}
	return result; 
}

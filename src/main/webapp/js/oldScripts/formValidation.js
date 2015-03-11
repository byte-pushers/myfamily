function textBoxValidation(value, error, min, max, regex) {
	if (isEmpty(value) == false) {
		if(regex.test(value)){
			if (isGreaterThanMaxLength(value, max)) {
				tooLongError(error, max);
				return false;
			}
			if (isLessThanMinLength(value, min)) {
				tooShortError(error, min)
				return false;
			}
			return true;
		}
		else{
			invalidCharactersError(error);
			return false;
		}
	} else {
		requiredError(error);
		return false
	}
}

function optionalTextBox(value, error, min, max, regex) {
	if (isEmpty(value) == false) {
		if(regex.test(value)){
			if (isGreaterThanMaxLength(value, max)) {
				tooLongError(error, max);
				return false;
			}
			if (isLessThanMinLength(value, min)) {
				tooShortError(error, min)
				return false;
			}
			return true;
		}
		else{
			invalidCharactersError(error);
			return false;
		}
	}
}

function dropDownValidation(value, error) {
	if (isEmpty(value) == false) {
		return true;
	} else {
		allFieldsError(error);
		return false;
	}
}

function emailValidation(value, error, regex) {
	if (isEmpty(value) == false) {
		if (regex.test(value) == false) {
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

function URLValidation(value, error, regex) {
	if (value.length && regex.test(value) == false) {
		notValidURLError(error);
		return false;
	}
	return true;
}

function isGreaterThanMaxLength(targetString, maxLength) {
	if (targetString.length > maxLength) {
		return true;
	}
	return false;
}

function isLessThanMinLength(targetString, minLength) {
	if (targetString.length < minLength) {
		return true;
	}
	return false;
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
	if (targetObject != null && targetObject != undefined
			&& targetObject.length > 0) {
		return false;
	}
	return true;
}

function requiredError(errorString) {
	errorString.innerHTML = "*Must be filled out";
}

function invalidCharactersError(errorString) {
	errorString.innerHTML = "*Invalid Characters";
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
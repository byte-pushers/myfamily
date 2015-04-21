function requiredValidation(value, min, max, regex) {
	if(regex.test(value)){
		if (isGreaterThanMaxLength(value, max)) {
			return false;
		}
		if (isLessThanMinLength(value, min)) {
			return false;
		}
		else{
		    return true;
		}
	}
	else{
		return false;
	}
}

function optionalValue(value, min, max, regex) {
	if (isEmpty(value) == false) {
		if(regex.test(value)){
			if (isGreaterThanMaxLength(value, max)) {
				return false;
			}
			if (isLessThanMinLength(value, min)) {
				return false;
			}
			else{
			    return true;
			}
		}
		else{
			return true;
		}
	}
}

function regexValidation(input, regex) {
	if (isEmpty(input) == true) {
		if (regex.test(input) == true) {
        	return true;
        }
        else{
            return false;
        }
	}
	else {
		return false;
	}
}

function dropDownValidation(value) {
	if (isEmpty(value) == false) {
		return true;
	} else {
		return false;
	}
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
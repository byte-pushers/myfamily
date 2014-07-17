function customValidation() {
	 var nameError = document.getElementById("nameError");
	 nameError.innerHTML = "";
	 
	 var descriptionError = document.getElementById("descriptionError");
	 descriptionError.innerHTML = "";
	 
	 var htmlError = document.getElementById("htmlError");
	 htmlError.innerHTML = "";
	 
	 var nameElement = document.getElementById("name");
	 var descriptionElement = document.getElementById("description");
	 var htmlElement = document.getElementById("htmlLink");
	 
	if(isRequired(true) == true && isEmpty(nameElement.value ) == false) {
		if (isGreaterThanMaxLength(nameElement.value, 9)) {
			nameError.innerHTML = "Error!";
		}
		if (isLessThanMinLength(nameElement.value, 2)) {
			nameError.innerHTML = "Error!";
		}
	} else {
		nameError.innerHTML = "Error!";
	}
	
	if(isRequired(true) == true && isEmpty(descriptionElement.value ) == false) {
		if (isGreaterThanMaxLength(descriptionElement.value, 9)) {
			descriptionError.innerHTML = "Error!";
		}
		if (isLessThanMinLength(descriptionElement.value, 2)) {
			descriptionError.innerHTML = "Error!";
		}
	} else {
		descriptionError.innerHTML = "Error!";
	}
	
	if(isRequired(true) == true && isEmpty(htmlElement.value ) == false) {
		if (isGreaterThanMaxLength(htmlElement.value, 9)) {
			htmlError.innerHTML = "Error!";
		}
		if (isLessThanMinLength(htmlElement.value, 2)) {
			htmlError.innerHTML = "Error!";
		}
	} else {
		htmlError.innerHTML = "Error!";
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
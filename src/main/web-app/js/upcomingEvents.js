function customValidation() {
	document.getElementById("nameError").innerHTML = "";

	if (isReqired(true) == true
			&& isEmpty(targetString) == false) {
		if (isGreaterThanMinLength(document.getElementById("name").value, 15)) {
			document.getElementById("nameError").innerHTML = "Error!";
		}

		if (isLessThanMaxLength(document.getElementById("name").value, 3)) {
			document.getElementById("nameError").innerHTML = "Error!";
		}
	} else {
		document.getElementById("nameError").innerHTML = "Error!";
	}

	if (isReqired(true) == true
			&& isEmpty(targetString) == false) {
		if (isGreaterThanMaxLength(
				document.getElementById("description").value, 10)) {
			document.getElementById("nameError").innerHTML = "Error!";
		}
	} else {
		document.getElementById("nameError").innerHTML = "Error!";
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
	return result;
}

function isRequired(requried) {

	if (reqired == true) {
		return true;
	}

	return false;
}

function isEmpty(targetObject) {
	var result = true;

	if (targetObject != null && targetObject != undefined
			&& targetObject.length > 0) {
		result = false;
	}

	return result;
}
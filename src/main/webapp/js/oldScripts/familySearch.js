function customValidation() {
	var familySearchForm = document.forms["familySearchForm"];
	var firstNameElement = familySearchForm.elements["firstName"];
	var middleNameElement = familySearchForm.elements["middleName"];
	var lastNameElement = familySearchForm.elements["lastName"];
	var cityElement = familySearchForm.elements["city"];
	var regionElement = familySearchForm.elements["region"];
	
	 validateFirstName(firstNameElement, true, 20, 2);
	 validateMiddleName(middleNameElement, true, 20, 2);
	 validateLastName(lastNameElement, true, 20, 2);
	 validateCity(cityElement, true, 20, 2);
	 validateRegion(regionElement, true, 20, 2);
	 validateAge();
	 validateZipCode();
	 validateState();
}

function hasNumber(targetString) {
	var result = false;
	// TODO: Split the string into an array of characters
	var targetStringArray = targetString.split("");
	// TODO: loop through the array of characters
	for (var i = 0; i < targetStringArray.length; i++) {
		// TODO: when you find a character that is a number set result variable
		// to true & break out of the loop
		var targetStringChar = targetStringArray[i];

		if (targetStringChar == '0') {
			result = true;
			break;
		} else if (targetStringChar == '1') {
			result = true;
			break;
		} else if (targetStringChar == '2') {
			result = true;
			break;
		} else if (targetStringChar == '3') {
			result = true;
			break;
		} else if (targetStringChar == '4') {
			result = true;
			break;
		} else if (targetStringChar == '5') {
			result = true;
			break;
		} else if (targetStringChar == '6') {
			result = true;
			break;
		} else if (targetStringChar == '7') {
			result = true;
			break;
		} else if (targetStringChar == '8') {
			result = true;
			break;
		} else if (targetStringChar == '9') {
			result = true;
			break;
		}
	}

	return result;
}
function hasOnlyNumbers(targetString) {
	var result = true;
	// TODO: Split the string into an array of characters
	var targetStringArray = targetString.split("");
	// TODO: loop through the array of characters
	for (var i = 0; i < targetStringArray.length; i++) {
		// TODO: when you find a character that is a number set result variable
		// to true & break out of the loop
		var targetStringChar = targetStringArray[i];

		if (targetStringChar == '1') {
			result = false;
			break;
		} else if (targetStringChar == '2') {
			result = false;
			break;
		} else if (targetStringChar == '3') {
			result = false;
			break;
		} else if (targetStringChar == '4') {
			result = false;
			break;
		} else if (targetStringChar == '5') {
			result = false;
			break;
		} else if (targetStringChar == '6') {
			result = false;
			break;
		} else if (targetStringChar == '7') {
			result = false;
			break;
		} else if (targetStringChar == '8') {
			result = false;
			break;
		} else if (targetStringChar == '9') {
			result = false;
			break;
		}

	}

	return result;
}
function hasNothingButNumbers(targetString) {
	var result = true;
	// TODO: Split the string into an array of characters
	var targetStringArray = targetString.split("");
	// TODO: loop through the array of characters
	for (var i = 0; i < targetStringArray.length; i++) {
		// TODO: when you find a character that is a number set result variable
		// to true & break out of the loop
		var targetStringChar = targetStringArray[i];

		if (targetStringChar == '1') {
			result = false;
			break;
		} else if (targetStringChar == '2') {
			result = false;
			break;
		} else if (targetStringChar == '3') {
			result = false;
			break;
		} else if (targetStringChar == '4') {
			result = false;
			break;
		} else if (targetStringChar == '5') {
			result = false;
			break;
		} else if (targetStringChar == '6') {
			result = false;
			break;
		} else if (targetStringChar == '7') {
			result = false;
			break;
		} else if (targetStringChar == '8') {
			result = false;
			break;
		} else if (targetStringChar == '9') {
			result = false;
			break;
		}

	}

	return result;
}

function isGreaterThan(somNumber, maxNumber) {
	var result = false;
	
	//TODO: make sure somNumber is a real number and not equal to null and not equal to undefined
	
	
	
	
	//TODO: make sure maxNumber is a real number and not equal to null and not equal to undefined
	if (somNumber > maxNumber) {
		result = true;
	}

	return result;
}
function isLesserThan(somNumber, minNumber) {
	var result = false;

	if (somNumber < minNumber) {
		result = true;
	}

	return result;
}
function validateFirstName(firstNameFormElement, required, maxNumber, minNumber) {
	validateInputTypeTextField(firstNameFormElement, required, maxNumber, minNumber, "First Name ");
}
function validateMiddleName(middleNameFormElement, required, maxNumber, minNumber) {
	validateInputTypeTextField(middleNameFormElement, required, maxNumber, minNumber, "Middle Name ");
}
function validateLastName(lastNameFormElement, required, maxNumber, minNumber) {
	validateInputTypeTextField(lastNameFormElement, required, maxNumber, minNumber, "Last Name ");
}
function validateCity(cityFormElement, required, maxNumber, minNumber){
	validateInputTypeTextField(cityFormElement, required, maxNumber, minNumber, "City ");
}
function validateRegion(regionFormElement, required, maxNumber, minNumber){
	validateInputTypeTextField(regionFormElement, required, maxNumber, minNumber, "Region ");
}
function validateInputTypeTextField(FormElement, required, maxNumber, minNumber, formElementLabelName) {
	if (required) {
		if (hasNumber(FormElement.value)) {
			// alerts
			alert(formElementLabelName + "can not contain numbers");
		}
		if (isGreaterThan(FormElement.value.length, maxNumber)) {
			// alerts
			alert(formElementLabelName + "can not be longer than 20 characters");
		}
		if (isLesserThan(FormElement.value.length, minNumber)) {
			// alerts
			alert(formElementLabelName + "can not be less than 2 characters");
		}
	} else if (isGreaterThan(FormElement.value.length, 0)) {
		if (hasNumber(firstNameFormElement.value)) {
			// alerts
			alert(formElementLabelName + "can not be empty");
		}
		if (isGreaterThan(FormElement.value.length, maxNumber)) {
			// alerts
			alert(formElementLabelName + "can not be longer than 20 characters");
		}
		if (isLesserThan(FormElement.value.length, minNumber)) {
			// alerts
			alert(formElementLabelName + "can not be less than 2 characters");
		}
	}
}

function validateAge() {
	var ageElement = familySearchForm.elements["age"];
	validateInputTypeNumberTextField(ageElement, true, 2, 1, "age ");
}

function isNumberGreaterThan(anyNumber, max) {
	var result = false;

	if (anyNumber > max) {
		result = true;
	}

	return result;
}
function isNumberLesserThan(anyNumber, min) {
	var result = false;

	if (anyNumber < min) {
		result = true;
	}

	return result;
}
function validateInputTypeNumberTextField(ageElement, required, max, min, ageElementName) {
	if (required) {
		if (hasOnlyNumbers(ageElement.value)) {
			// alert
			alert(ageElementName + "can not contain letters");
		}
		if (isNumberGreaterThan(ageElement.value.length, max)) {
			// alert
			alert(ageElementName + "can not be more than two numbers");
		}
		if (isNumberLesserThan(ageElement.value.length, min)) {
			// alert
			alert(ageElementName + "can not be less than one number");
		}

	}
}

function validateZipCode() {
	var zipCodeElement = familySearchForm.elements["zipCode"];
	validateInputTypeOnlyNumberTextField(zipCodeElement, true, 5, 5, "Zip Code ");
}
function isOnlyNumberGreaterThan(randomNumber, max){
	var result = false;
	
	if (randomNumber > max){
		result = true;
	}
	
	return result;
}
function isOnlyNumberLesserThan(randomNumber, min){
	var result = false;
	 
	if (randomNumber < min){
		result = true;
	}
	return result;
}
function validateInputTypeOnlyNumberTextField(zipCodeElement, required, max, min, zipCodeElementName){
	if(required){
		if (hasNothingButNumbers(zipCodeElement.value)){
			//alert
			alert(zipCodeElementName + "can not contain letters");
		}if (isOnlyNumberGreaterThan(zipCodeElement.value.length, max)){
			//alert
			alert(zipCodeElementName + "can not be greater than 5 numbers");
		}if (isOnlyNumberLesserThan(zipCodeElement.value.length, min)){
			//alert
			alert(zipCodeElementName + "can not be less than 5 numbers");
		}
	}
}
function isEmpty(targetString){
	var result = false;
	if(targetString.length == "choose"){
		
			if(targetString == stateValue){
				result = false;
			}
		
	}else {
		result = true;
	}
	return result;
}

function validateState(required){
	var stateDropDown = familySearchForm.elements["state"];
	
	if (isEmpty(stateDropDown.value) == true){
		//alert
		alert("your state is required");
		
	}
}

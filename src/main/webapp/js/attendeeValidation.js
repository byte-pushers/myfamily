function attendeeValidation(firstName, lastName, email, firstNameError, lastNameError, emailError) {
	var firstNameBoolean = false,
		lastNameBoolean = false, 
		emailBoolean = false,
		alpha = new RegExp("^[A-Z]+$", "i"),
	    emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{3}$", "i");
	
	if(textBoxValidation(firstName, firstNameError, 2, 10, alpha) == true) {
		firstNameBoolean = true;
	}
	if(textBoxValidation(lastName, lastNameError, 2, 15, alpha) == true){
		lastNameBoolean = true;
	}
	if(emailValidation(email, emailError, emailRegex) == true){
		emailBoolean = true;
	}

	if (firstNameBoolean == true && lastNameBoolean == true &&  emailBoolean == true) {
		return true;
	}
		return false;
}

function addAttendee(firstName, lastName, email) {
	var attendeeFirstNameError = document.getElementById("attendeeFError");
	attendeeFirstNameError.innerHTML = "";

	var attendeeLastNameError = document.getElementById("attendeeLError");
	attendeeLastNameError.innerHTML = "";

	var attendeeEmailError = document.getElementById("attendeeEmailError");
	attendeeEmailError.innerHTML = "";

	if (attendeeValidation(firstName, lastName, email, attendeeFirstNameError,
			attendeeLastNameError, attendeeEmailError) === true) {
		
		var attendee = new Attendee(attendeeFirstNameElement, attendeeLastNameElement, attendeeEmailElement);
		eventTest.addToAttendeeArray(attendee);
		addToTable();
	}
}

function addToTable() {
	var table = document.getElementById("attendeeTable");
	var rowCount = (table.rows.length);
	
	createRow(table, rowCount, eventTest.getAttendeeArray().length - 1);
}

function createRow(table, rowNum, index){
	var row = table.insertRow(rowNum);

	var cell0 = row.insertCell(0)
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);

	cell0.innerHTML = rowNum;
	cell1.innerHTML = eventTest.getAttendee(index).getFullName();
	cell2.innerHTML = eventTest.getAttendee(index).getEmail();
	cell3.appendChild(createRemoveRowButton(index));
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
		var rowCount = i + 1;
		createRow(table, rowCount, i);
	}
}

function createRemoveRowButton(attendeeArrayIndex) {
	var removeRowButton = document.createElement("BUTTON");
	removeRowButton.className = "btn btn-link";
	removeRowButton.appendChild(createRemoveIcon());
	removeRowButton.onclick = function() {
		deleteRow(attendeeArrayIndex);
	};
	return removeRowButton;
}

function createRemoveIcon(){
	var iconSpanElement = document.createElement("SPAN");
    
	iconSpanElement.className ="glyphicon glyphicon-remove-circle changeColorToRed";

	return iconSpanElement;
}
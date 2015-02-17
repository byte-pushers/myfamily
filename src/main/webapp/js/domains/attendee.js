function Attendee(fName, lName, emailAddress) {

	var firstName = fName.value, 
		lastName = lName.value,
		email = emailAddress.value;

	function setFirstName(firstName) {
		this.firstName = firstName;
	}

	function setLastName(lastName) {
		this.lastName = lastName;
	}

	this.getEmail = function() {
		return email;
	}
	
	this.setEmail = function(emailAddress) {
		email = emailAddress;
	}
	
	this.getFirstName = function() {
		return firstName;
	}
	
	this.getLastName = function() {
		return lastName;
	}
	
	this.getFullName = function() {
		return firstName + " " + lastName;
	}
	
	this.setFullName = function(firstName, lastName) {
		setFirstName(firstName);
		setLastName(lastName);
	}
}